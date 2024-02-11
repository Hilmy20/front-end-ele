// MeetingPage.js

import React, { useState, useRef, useEffect } from "react";

const Meeting = () => {
  const [isMicMuted, setMicMuted] = useState(false);
  const [isCameraOff, setCameraOff] = useState(false);
  const [isScreenSharing, setScreenSharing] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [myStream, setMyStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const myVideoRef = useRef(null);
  const peerVideoRef = useRef(null);

  useEffect(() => {
    // Inisialisasi WebRTC
    const initWebRTC = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setMyStream(stream);
        myVideoRef.current.srcObject = stream;

        const peerConnection = new RTCPeerConnection();
        setPeerConnection(peerConnection);

        peerConnection.addStream(stream);

        peerConnection.onicecandidate = (event) => {
          // Kirim kandidat ICE ke peer lainnya
          if (event.candidate) {
            // Kirim event.candidate ke peer lainnya, misalnya menggunakan socket.io atau cara lainnya
          }
        };

        peerConnection.onaddstream = (event) => {
          peerVideoRef.current.srcObject = event.stream;
        };
      } catch (error) {
        console.error("Error accessing media devices: ", error);
      }
    };

    initWebRTC();

    return () => {
      if (peerConnection) {
        peerConnection.close();
      }
    };
  }, []);

  const toggleMic = () => {
    // Implementasi untuk mematikan/menghidupkan mikrofon
    const audioTracks = myStream.getAudioTracks();
    audioTracks.forEach((track) => {
      track.enabled = !isMicMuted;
    });
    setMicMuted(!isMicMuted);
  };

  const toggleCamera = () => {
    // Implementasi untuk mematikan/menghidupkan kamera
    const videoTracks = myStream.getVideoTracks();
    videoTracks.forEach((track) => {
      track.enabled = !isCameraOff;
    });
    setCameraOff(!isCameraOff);
  };

  const toggleScreenSharing = () => {
    // Implementasi untuk memulai/berhenti berbagi layar
    // Perlu menambahkan logika sendiri untuk berbagi layar
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    // Implementasi untuk mengirim pesan chat
  };

  return (
    <div className="flex">
      <div className="w-3/4">
        <video ref={myVideoRef} autoPlay muted />
        <video ref={peerVideoRef} autoPlay />
      </div>
      <div className="w-1/4">
        <div>
          <button onClick={toggleMic}>
            {isMicMuted ? "Unmute Mic" : "Mute Mic"}
          </button>
          <button onClick={toggleCamera}>
            {isCameraOff ? "Turn On Camera" : "Turn Off Camera"}
          </button>
          <button onClick={toggleScreenSharing}>
            {isScreenSharing ? "Stop Sharing Screen" : "Start Sharing Screen"}
          </button>
        </div>
        <div>
          <ul>
            {chatMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleChatSubmit}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Meeting;
