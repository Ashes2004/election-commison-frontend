import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './auth.css'
const AuthPage = () => {
  

    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    if (token != undefined) {
      navigate("/");
    }

  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "voter",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://gigantic-charil-dhawal-3f849cd8.koyeb.app/api/${formData.role}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await response.json();
      sessionStorage.setItem("token", data.token);
      if (data.voter) {
        sessionStorage.setItem("voterId", data.voter._id);
      } else if (data.candidate) {
        sessionStorage.setItem("candidateId", data.candidate._id);
      } else if (data.admin) {
        sessionStorage.setItem("adminId", data.admin._id);
      }
      alert("Login Sucessfully");
      navigate('/')
      console.log(data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="auth  flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="voter">Voter</option>
              <option value="candidate">Candidate</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
