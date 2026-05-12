import { useState } from "react";
import { RefreshCw, Navigation, ChevronRight, Zap } from "lucide-react";

const stops = [
  { name: "North Gate", time: "7:30 AM", status: "passed" },
  { name: "East Colony", time: "7:42 AM", status: "passed" },
  { name: "Central Park", time: "7:51 AM", status: "current" },
  { name: "Science Block", time: "7:58 AM", status: "upcoming" },
  { name: "Library", time: "8:05 AM", status: "upcoming" },
  { name: "Main Block", time: "8:12 AM", status: "upcoming" },
];

export function TrackingScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100%", fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px 20px",
          borderBottom: "1px solid #F1F5F9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
            Live Tracking
          </h2>
          <p style={{ fontSize: "12px", color: "#64748B", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
            Bus B12 • Route 04
          </p>
        </div>
        <button
          onClick={handleRefresh}
          style={{
            width: "38px",
            height: "38px",
            backgroundColor: "#EFF6FF",
            border: "none",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <RefreshCw
            size={16}
            color="#2563EB"
            style={{
              transition: "transform 0.4s",
              transform: refreshing ? "rotate(360deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>

      {/* Map Placeholder */}
      <div style={{ position: "relative", margin: "0" }}>
        <div
          style={{
            height: "240px",
            background: "linear-gradient(180deg, #DBEAFE 0%, #EFF6FF 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Fake map grid */}
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            {/* Horizontal roads */}
            {[40, 80, 120, 160, 200].map((y) => (
              <line key={y} x1="0" y1={y} x2="390" y2={y} stroke="#C7D7F0" strokeWidth="1" strokeDasharray="0" />
            ))}
            {/* Vertical roads */}
            {[60, 130, 200, 270, 340].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="#C7D7F0" strokeWidth="1" />
            ))}
            {/* Main roads */}
            <line x1="0" y1="120" x2="390" y2="120" stroke="#BFDBFE" strokeWidth="5" />
            <line x1="130" y1="0" x2="200" y2="240" stroke="#BFDBFE" strokeWidth="4" />
            {/* Route path */}
            <path
              d="M 40 180 L 80 160 L 130 120 L 200 100 L 270 90 L 330 80"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="8 3"
            />
            {/* Passed route */}
            <path
              d="M 40 180 L 80 160 L 130 120 L 180 105"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Stop dots */}
            {[
              { x: 40, y: 180 },
              { x: 80, y: 160 },
              { x: 130, y: 120 },
              { x: 200, y: 100 },
              { x: 270, y: 90 },
              { x: 330, y: 80 },
            ].map((pos, i) => (
              <circle
                key={i}
                cx={pos.x}
                cy={pos.y}
                r="5"
                fill={i < 2 ? "#2563EB" : i === 2 ? "#2563EB" : "#94A3B8"}
                stroke="white"
                strokeWidth="2"
              />
            ))}
          </svg>

          {/* Bus Marker */}
          <div
            style={{
              position: "absolute",
              left: "168px",
              top: "88px",
              transform: "translate(-50%, -100%)",
            }}
          >
            <div
              style={{
                backgroundColor: "#2563EB",
                borderRadius: "12px 12px 12px 2px",
                padding: "6px 10px",
                boxShadow: "0 4px 16px rgba(37, 99, 235, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#22C55E",
                  borderRadius: "50%",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "white", fontFamily: "'Poppins', sans-serif" }}>
                B12
              </span>
            </div>
          </div>

          {/* Map Attribution */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "8px",
              padding: "5px 10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Navigation size={12} color="#2563EB" />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#2563EB", fontFamily: "'Poppins', sans-serif" }}>
              Live Map
            </span>
          </div>

          {/* Speed */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "8px",
              padding: "5px 10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Zap size={12} color="#F59E0B" />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#374151", fontFamily: "'Poppins', sans-serif" }}>
              28 km/h
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        {/* ETA Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
            borderRadius: "18px",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            boxShadow: "0 8px 24px rgba(37, 99, 235, 0.3)",
          }}
        >
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Arriving at Main Block
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "4px" }}>
              <span style={{ fontSize: "30px", fontWeight: 700, color: "white", fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}>
                8
              </span>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)", fontFamily: "'Poppins', sans-serif" }}>
                min away
              </span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", margin: "0 0 4px", fontFamily: "'Poppins', sans-serif" }}>
              ETA
            </p>
            <p style={{ color: "white", fontSize: "18px", fontWeight: 700, margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              8:12 AM
            </p>
          </div>
        </div>

        {/* Current / Next Stop */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
          <div
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "14px",
              border: "1.5px solid #BFDBFE",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ fontSize: "10px", color: "#64748B", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'Poppins', sans-serif" }}>
              Current Stop
            </p>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#2563EB", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Central Park
            </p>
            <p style={{ fontSize: "11px", color: "#64748B", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
              7:51 AM
            </p>
          </div>
          <div
            style={{
              width: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ChevronRight size={20} color="#94A3B8" />
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "14px",
              border: "1.5px solid #E2E8F0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ fontSize: "10px", color: "#64748B", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'Poppins', sans-serif" }}>
              Next Stop
            </p>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#374151", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Science Block
            </p>
            <p style={{ fontSize: "11px", color: "#64748B", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
              7:58 AM
            </p>
          </div>
        </div>

        {/* Stop Timeline */}
        <div>
          <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "0 0 12px", fontFamily: "'Poppins', sans-serif" }}>
            All Stops
          </h3>
          {stops.map((stop, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                marginBottom: idx < stops.length - 1 ? "0" : "0",
              }}
            >
              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor:
                      stop.status === "passed" ? "#22C55E" :
                      stop.status === "current" ? "#2563EB" : "#E2E8F0",
                    border:
                      stop.status === "passed" ? "none" :
                      stop.status === "current" ? "2px solid #93C5FD" :
                      "2px solid #CBD5E1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: stop.status === "current" ? "0 0 0 4px rgba(37,99,235,0.15)" : "none",
                    zIndex: 1,
                    marginTop: "8px",
                  }}
                >
                  {stop.status === "passed" && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {stop.status === "current" && (
                    <div style={{ width: "5px", height: "5px", backgroundColor: "white", borderRadius: "50%" }} />
                  )}
                </div>
                {idx < stops.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      height: "28px",
                      backgroundColor: stop.status === "passed" ? "#22C55E" : "#E2E8F0",
                      borderRadius: "1px",
                      marginTop: "2px",
                    }}
                  />
                )}
              </div>
              {/* Stop Info */}
              <div
                style={{
                  flex: 1,
                  padding: "6px 0 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: stop.status === "current" ? 600 : 400,
                    color:
                      stop.status === "passed" ? "#94A3B8" :
                      stop.status === "current" ? "#2563EB" : "#374151",
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {stop.name}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: stop.status === "current" ? "#2563EB" : "#94A3B8",
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: stop.status === "current" ? 600 : 400,
                  }}
                >
                  {stop.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
