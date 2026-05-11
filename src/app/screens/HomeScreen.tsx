import { useState } from "react";
import { useNavigate } from "react-router";
import { Phone, ChevronRight, Clock, Navigation, MapPin, Bell, AlertCircle } from "lucide-react";

const busRoutes = [
  { id: "B12", from: "North Gate", to: "College Main", eta: "8 min", stops: 3, status: "on-time" },
  { id: "B07", from: "East Colony", to: "Library Block", eta: "15 min", stops: 5, status: "delayed" },
];

export function HomeScreen() {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(0);
  const bus = busRoutes[activeRoute];

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100%", fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(160deg, #2563EB 0%, #1D4ED8 100%)",
          padding: "20px 24px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-1px",
            left: 0,
            right: 0,
            height: "32px",
            backgroundColor: "#F8FAFC",
            borderRadius: "32px 32px 0 0",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "0 0 2px", fontFamily: "'Poppins', sans-serif" }}>
              Good Morning ☀️
            </p>
            <h2 style={{ color: "white", fontSize: "20px", fontWeight: 600, margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Arjun Kumar
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
              CS Engineering • 3rd Year
            </p>
          </div>
          <button
            onClick={() => navigate("/app/notifications")}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Bell size={18} color="white" />
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                width: "8px",
                height: "8px",
                backgroundColor: "#F59E0B",
                borderRadius: "50%",
                border: "2px solid #1D4ED8",
              }}
            />
          </button>
        </div>
      </div>

      <div style={{ padding: "0 20px 24px", marginTop: "-8px" }}>
        {/* Live Bus Status Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #EFF6FF",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: bus.status === "on-time" ? "#22C55E" : "#F59E0B",
                  borderRadius: "50%",
                  boxShadow: `0 0 0 3px ${bus.status === "on-time" ? "rgba(34,197,94,0.2)" : "rgba(245,158,11,0.2)"}`,
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: bus.status === "on-time" ? "#22C55E" : "#F59E0B",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {bus.status === "on-time" ? "Live • On Time" : "Live • Delayed"}
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#EFF6FF",
                padding: "4px 12px",
                borderRadius: "20px",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#2563EB", fontFamily: "'Poppins', sans-serif" }}>
                BUS {bus.id}
              </span>
            </div>
          </div>

          {/* ETA Display */}
          <div
            style={{
              background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
              borderRadius: "14px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div>
              <p style={{ fontSize: "11px", color: "#64748B", margin: "0 0 4px", fontFamily: "'Poppins', sans-serif" }}>
                Estimated Arrival
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "36px", fontWeight: 700, color: "#2563EB", fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}>
                  {bus.eta.split(" ")[0]}
                </span>
                <span style={{ fontSize: "16px", fontWeight: 500, color: "#2563EB", fontFamily: "'Poppins', sans-serif" }}>
                  min
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "#64748B", margin: "4px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                {bus.stops} stops away
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Clock size={28} color="#93C5FD" />
              <p style={{ fontSize: "11px", color: "#64748B", margin: "8px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                ~7:52 AM
              </p>
            </div>
          </div>

          {/* Route Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#2563EB",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, height: "1.5px", background: "linear-gradient(90deg, #2563EB 60%, #E2E8F0 100%)", borderRadius: "2px" }} />
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#E2E8F0",
                borderRadius: "50%",
                border: "1.5px solid #94A3B8",
                flexShrink: 0,
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "11px", color: "#64748B", margin: 0, fontFamily: "'Poppins', sans-serif" }}>From</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#111827", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                {bus.from}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "11px", color: "#64748B", margin: 0, fontFamily: "'Poppins', sans-serif" }}>To</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#111827", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                {bus.to}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <button
              onClick={() => navigate("/app/track")}
              style={{
                flex: 1,
                height: "44px",
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                border: "none",
                borderRadius: "12px",
                color: "white",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <Navigation size={14} />
              Track Live
            </button>
            <button
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "#F0FDF4",
                border: "1.5px solid #BBF7D0",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Phone size={16} color="#22C55E" />
            </button>
          </div>
        </div>

        {/* Quick Bus Selector */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#111827", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              My Routes
            </h3>
            <button
              onClick={() => navigate("/app/routes")}
              style={{ background: "none", border: "none", fontSize: "13px", color: "#2563EB", cursor: "pointer", fontFamily: "'Poppins', sans-serif", display: "flex", alignItems: "center", gap: "2px" }}
            >
              See all <ChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {busRoutes.map((route, idx) => (
              <button
                key={route.id}
                onClick={() => setActiveRoute(idx)}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: activeRoute === idx ? "#EFF6FF" : "#ffffff",
                  border: activeRoute === idx ? "1.5px solid #93C5FD" : "1.5px solid #E2E8F0",
                  borderRadius: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: activeRoute === idx ? "#2563EB" : "#374151", fontFamily: "'Poppins', sans-serif" }}>
                    {route.id}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: route.status === "on-time" ? "#22C55E" : "#F59E0B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {route.status === "on-time" ? "On time" : "Delayed"}
                  </span>
                </div>
                <p style={{ fontSize: "11px", color: "#64748B", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                  {route.from}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div>
          <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#111827", margin: "0 0 12px", fontFamily: "'Poppins', sans-serif" }}>
            Today's Schedule
          </h3>
          {[
            { time: "7:30 AM", label: "Morning Pick-up", stop: "North Gate", status: "completed" },
            { time: "8:45 AM", label: "Campus Drop", stop: "Main Block", status: "active" },
            { time: "1:30 PM", label: "Afternoon Pick-up", stop: "Library Block", status: "upcoming" },
            { time: "5:00 PM", label: "Evening Drop", stop: "North Gate", status: "upcoming" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "12px 16px",
                backgroundColor: item.status === "active" ? "#EFF6FF" : "#ffffff",
                borderRadius: "14px",
                marginBottom: "8px",
                border: item.status === "active" ? "1.5px solid #BFDBFE" : "1.5px solid #F1F5F9",
              }}
            >
              <div style={{ textAlign: "center", width: "52px", flexShrink: 0 }}>
                <p style={{ fontSize: "12px", fontWeight: 600, color: item.status === "active" ? "#2563EB" : "#374151", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                  {item.time}
                </p>
              </div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    item.status === "completed" ? "#22C55E" :
                    item.status === "active" ? "#2563EB" : "#E2E8F0",
                  border: item.status === "upcoming" ? "2px solid #94A3B8" : "none",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#111827", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                  {item.label}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                  <MapPin size={10} color="#94A3B8" />
                  <p style={{ fontSize: "11px", color: "#64748B", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                    {item.stop}
                  </p>
                </div>
              </div>
              {item.status === "active" && (
                <div
                  style={{
                    backgroundColor: "#DBEAFE",
                    padding: "3px 8px",
                    borderRadius: "20px",
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#2563EB", fontFamily: "'Poppins', sans-serif" }}>
                    NOW
                  </span>
                </div>
              )}
              {item.status === "completed" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#22C55E" opacity="0.15"/>
                  <path d="M5 8L7 10L11 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Alert Banner */}
        <div
          style={{
            backgroundColor: "#FFFBEB",
            borderRadius: "14px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            border: "1px solid #FDE68A",
            marginTop: "8px",
          }}
        >
          <AlertCircle size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: "1px" }} />
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "#92400E", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Bus B07 — 5 min delay
            </p>
            <p style={{ fontSize: "11px", color: "#B45309", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
              Due to traffic at East Colony junction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}