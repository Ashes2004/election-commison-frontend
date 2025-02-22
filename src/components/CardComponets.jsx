const CardSet = ({ title, items , color }) => {
    return (
      <div className={`${color} p-6 rounded-2xl shadow-md w-80`}>
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">{title}</h2>
        <div className="space-y-2">
          {items.map((item, index) => (
            <button key={index} className="w-full bg-white py-2 px-4 rounded-lg flex justify-between items-center shadow-sm hover:bg-blue-50">
              <span className="text-gray-700">{item}</span>
              <span className="text-blue-500">&rarr;</span>
            </button>
          ))}
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600">Know More</button>
      </div>
    );
  };
  
  const CardContainer = () => {
    const sections = [
      {
        title: "Electors",
        items: [
          "Register Now To Vote",
          "Check Application Status",
          "Know Your Polling Booth",
          "Search Name in Voter List",
          "Register Complaint",
        ],
        color:"bg-pink-100"
      },
      {
        title: "Political Party/Candidate",
        items: [
          "New Party Registration",
          "Election Symbol Allotment",
          "Nomination",
          "e-Affidavit",
          "Permission",
        ],
        color:"bg-blue-100"
      },
      {
        title: "ECI Officials",
        items: [
          "Handbooks/Manuals/Checklist",
          "Compendium of Instructions",
          "Postal Ballots",
          "Service Voter Portal",
          "Observer Portal",
        ],
        color:"bg-green-100"
      },
    ];
  
    return (
      <div className="flex justify-center gap-6 flex-wrap p-6 bg-gray-50">
        {sections.map((section, index) => (
          <CardSet key={index} title={section.title} items={section.items}  color = {section.color}/>
        ))}
      </div>
    );
  };
  
  export default CardContainer;
  