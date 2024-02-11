// TatapMuka.js
import React, { useState } from "react";

const TatapMuka = () => {
  const [meetingCode, setMeetingCode] = useState("");
  const [userName, setUserName] = useState("");

  const handleJoinMeeting = () => {
    // Implement logic for joining the meeting
    console.log(
      `Joining meeting with code: ${meetingCode} and username: ${userName}`
    );
    // Add your logic here to handle joining the meeting

    // Redirect to the Meeting component
    history.push("/meeting");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Masuk ke Meeting</h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="meetingCode"
          >
            Kode Meeting:
          </label>
          <input
            type="text"
            id="meetingCode"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Masukkan Kode Meeting"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userName"
          >
            Nama Pengguna:
          </label>
          <input
            type="text"
            id="userName"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Masukkan Nama Pengguna"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
          onClick={handleJoinMeeting}
        >
          Masuk ke Meeting
        </button>
      </div>
    </div>
  );
};

export default TatapMuka;
