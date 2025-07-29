import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for the bio data
interface BioData {
  name: string;
  degree: string;
  institution: string;
  year: number;
  grade: string;
  joinedAt: string;
}

const BioComponent: React.FC = () => {
  const [bioData, setBioData] = useState<BioData | null>(null);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await axios.get("http://localhost:4002/api/bio");
        setBioData(response.data);
        console.log("Bio fetched:", response.data);
      } catch (error) {
        console.error("Error fetching bio:", error);
      }
    };
    fetchBio();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Bio Information</h2>
      {bioData ? (
        <div className="space-y-2 text-gray-800">
          <p><strong>Name:</strong> {bioData.name}</p>
          <p><strong>Degree:</strong> {bioData.degree}</p>
          <p><strong>Institution:</strong> {bioData.institution}</p>
          <p><strong>Year:</strong> {bioData.year}</p>
          <p><strong>Grade:</strong> {bioData.grade}</p>
          {/* <p><strong>Joined At:</strong> {new Date(bioData.joinedAt).toLocaleDateString()}</p> */}
        </div>
      ) : (
        <p className="text-gray-500">Loading bio data...</p>
      )}
    </div>
  );
};

export default BioComponent;