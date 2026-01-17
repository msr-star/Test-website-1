import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  // This is temporary dummy data until you send the real file
  const [questions, setQuestions] = useState([
    { id: 1, text: "I enjoy solving complex problems.", category: "Analytical" },
    { id: 2, text: "I like helping others learn.", category: "Social" }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Command Center</h1>
        <button 
          onClick={() => navigate('/user-login')}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Total Questions</h3>
          <p className="text-2xl font-bold text-blue-600">{questions.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Active Students</h3>
          <p className="text-2xl font-bold text-green-600">12</p>
        </div>
      </div>

      {/* Question Management Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Manage Assessment Questions</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Add New Question
          </button>
        </div>
        
        <div className="divide-y divide-gray-100">
          {questions.map((q) => (
            <div key={q.id} className="p-4 hover:bg-gray-50 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{q.text}</p>
                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                  {q.category}
                </span>
              </div>
              <div className="flex gap-3">
                <button className="text-sm text-gray-600 hover:text-blue-600">Edit</button>
                <button className="text-sm text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;