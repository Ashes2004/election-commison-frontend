import { useState, useEffect } from "react";

export default function NewsTabs() {
    const [activeTab, setActiveTab] = useState("Current Issues");
    const [newsData, setNewsData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("https://gigantic-charil-dhawal-3f849cd8.koyeb.app/api/news");
                if (!response.ok) throw new Error("Failed to fetch news data");
                const data = await response.json();

                // Group news by category
                const groupedData = data.reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                }, {});

                setNewsData(groupedData);
                setActiveTab(Object.keys(groupedData)[0] || "Current Issues");
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p className="text-center text-lg text-gray-500">Loading news...</p>;
    if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;

    return (
        <div className="w-screen h-full flex flex-col items-center justify-center p-10">
            <div className="p-6 bg-gray-100 rounded-lg  shadow-md">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-4 border-b pb-2">
                    {Object.keys(newsData).map((tab) => (
                        <button
                            key={tab}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md border ${activeTab === tab ? "bg-blue-500 text-white border-blue-500" : "bg-white text-gray-700 border-gray-300"}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* News List */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    {newsData[activeTab]?.map((news, index) => (
                        <div key={index} className="flex flex-col gap-2 border-b py-3">
                            <p className="font-semibold text-gray-800">{news.title}</p>
                            <p className="text-sm text-gray-500">{news.date}</p>
                            <details className="text-sm text-gray-600 mt-1">
                                <summary className="cursor-pointer text-blue-500">Show Description</summary>
                                <p className="mt-1">{news.description}</p>
                            </details>
                        </div>
                    ))}
                </div>

                <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-md shadow-md flex items-center gap-2 hover:bg-blue-600">
                    View More →
                </button>
            </div>
        </div>
    );
}
