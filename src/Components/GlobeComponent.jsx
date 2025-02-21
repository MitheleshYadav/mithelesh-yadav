import React, { useRef, useEffect, useState } from "react";
import Globe from "globe.gl";

function GlobeComponent() {
  const globeRef = useRef(null);
  const [arcsData, setArcsData] = useState([]);

  useEffect(() => {
    if (!globeRef.current) return;

    // Example Arc Data (from New York to London)
    const data = [
      {
        startLat: 40.7128, // New York
        startLng: -74.006,
        endLat: 51.5074, // London
        endLng: -0.1278,
        color: ["#FF5733", "#33FF57"], // Gradient Color (Start to End)
      },
      {
        startLat: 34.0522, // Los Angeles
        startLng: -118.2437,
        endLat: 35.6895, // Tokyo
        endLng: 139.6917,
        color: ["#1E90FF", "#FFD700"], // Gradient Color
      },
    ];

    setArcsData(data);
  }, []);

  return (
    
      <Globe
        ref={globeRef}
        arcsData={arcsData}
        arcColor={(d) => d.color}
        arcDashLength={0.5}
        arcDashGap={2}
        arcDashAnimateTime={4000}
        arcStroke={1.5}
        arcAltitude={(d) => Math.random() * 0.3 + 0.1} // Random altitude
      />
  );
}

export default GlobeComponent;
