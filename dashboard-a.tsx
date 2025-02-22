import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [data] = useState([
    { name: "Mon", views: 400, visits: 240, visitors: 240, viewsLastWeek: 350, visitsLastWeek: 200, visitorsLastWeek: 220 },
    { name: "Tue", views: 300, visits: 139, visitors: 221, viewsLastWeek: 280, visitsLastWeek: 120, visitorsLastWeek: 200 },
    { name: "Wed", views: 200, visits: 980, visitors: 229, viewsLastWeek: 180, visitsLastWeek: 900, visitorsLastWeek: 210 },
    { name: "Thu", views: 278, visits: 390, visitors: 200, viewsLastWeek: 250, visitsLastWeek: 350, visitorsLastWeek: 190 },
    { name: "Fri", views: 189, visits: 480, visitors: 218, viewsLastWeek: 170, visitsLastWeek: 450, visitorsLastWeek: 250 },
    { name: "Sat", views: 239, visits: 380, visitors: 250, viewsLastWeek: 220, visitsLastWeek: 300, visitorsLastWeek: 260 },
    { name: "Sun", views: 349, visits: 430, visitors: 210, viewsLastWeek: 400, visitsLastWeek: 450, visitorsLastWeek: 220 },
  ]);

  const calculatePercentageDifference = (current: number, previous: number) => {
    return (((current - previous) / previous) * 100).toFixed(2);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {data.map((day, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{day.name}</h2>
            <p>Views: {day.views} (<span className={day.views >= day.viewsLastWeek ? "text-green-500" : "text-red-500"}>{calculatePercentageDifference(day.views, day.viewsLastWeek)}%</span>)</p>
            <p>Visits: {day.visits} (<span className={day.visits >= day.visitsLastWeek ? "text-green-500" : "text-red-500"}>{calculatePercentageDifference(day.visits, day.visitsLastWeek)}%</span>)</p>
            <p>Visitors: {day.visitors} (<span className={day.visitors >= day.visitorsLastWeek ? "text-green-500" : "text-red-500"}>{calculatePercentageDifference(day.visitors, day.visitorsLastWeek)}%</span>)</p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Weekly Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="visits" stroke="#82ca9d" />
            <Line type="monotone" dataKey="visitors" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
