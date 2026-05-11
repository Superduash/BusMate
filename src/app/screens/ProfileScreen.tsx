import { useState } from "react";
import { useNavigate } from "react-router";
import {
  User,
  MapPin,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Bus,
  Star,
  Settings,
  BookOpen,
} from "lucide-react";

const savedRoutes = [
  { id: "B12", name: "North Campus Express", from: "North Gate", color: "#2563EB" },
  { id: "B07", name: "East-West Connector", from: "East Colony", color: "#7C3AED" },
];

export function ProfileScreen() {
  const navigate = useNavigate();
  const [notifEnabled, setNotifEnabled] = useState(true);

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100%", fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(160deg, #2563EB 0%, #1D4ED8 100%)",
          padding: "20px 20px 56px",
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "white", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
            My Profile
          </h2>
          <button
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Settings size={16} color="white" />
          </button>
        </div>

        {/* Profile Card */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: "20px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#FCD34D",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: "#1E3A8A",
              flexShrink: 0,
              fontFamily: "'Poppins', sans-serif",
              border: "2px solid rgba(255,255,255,0.4)",
            }}
          >
            AK
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "white", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Arjun Kumar
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
              arjun.kumar@greenfield.edu
            </p>
            <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
              <div style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: "6px" }}>
                <span style={{ fontSize: "10px", color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                  CS Engineering
                </span>
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: "6px" }}>
                <span style={{ fontSize: "10px", color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                  3rd Year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 20px 24px", marginTop: "-8px" }}>
        {/* College ID Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            borderRadius: "18px",
            padding: "18px",
            marginBottom: "16px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.25)",
          }}
        >
          {/* Card Pattern */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              right: "-30px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "rgba(37, 99, 235, 0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-20px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(37, 99, 235, 0.1)",
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
            <div>
              <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)", margin: "0 0 4px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif" }}>
                Student ID
              </p>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "white", margin: 0, fontFamily: "'Poppins', sans-serif", letterSpacing: "2px" }}>
                GFU-2022-CS-347
              </p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", margin: "4px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                Greenfield University
              </p>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BookOpen size={20} color="rgba(255,255,255,0.7)" />
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
            <div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'Poppins', sans-serif" }}>Bus Pass</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#FCD34D", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>Active</p>
            </div>
            <div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'Poppins', sans-serif" }}>Valid Until</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "white", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>May 2025</p>
            </div>
            <div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'Poppins', sans-serif" }}>Assigned Bus</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#93C5FD", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>B12</p>
            </div>
          </div>
        </div>

        {/* Saved Routes */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Saved Routes
            </h3>
            <button
              onClick={() => navigate("/app/routes")}
              style={{
                background: "none",
                border: "none",
                fontSize: "12px",
                color: "#2563EB",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              Manage <ChevronRight size={12} />
            </button>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {savedRoutes.map((route) => (
              <div
                key={route.id}
                style={{
                  flex: 1,
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  padding: "12px",
                  border: "1.5px solid #F1F5F9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: route.color + "15",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Bus size={14} color={route.color} />
                </div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: route.color, margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                  {route.id}
                </p>
                <p style={{ fontSize: "10px", color: "#64748B", margin: "2px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                  {route.from}
                </p>
              </div>
            ))}
            <button
              style={{
                flex: 1,
                backgroundColor: "#F8FAFC",
                borderRadius: "14px",
                padding: "12px",
                border: "1.5px dashed #CBD5E1",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <Star size={18} color="#CBD5E1" />
              <p style={{ fontSize: "10px", color: "#94A3B8", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                Add Route
              </p>
            </button>
          </div>
        </div>

        {/* Settings Menu */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1.5px solid #F1F5F9",
            marginBottom: "16px",
          }}
        >
          {[
            { icon: Bell, label: "Notifications", value: notifEnabled ? "On" : "Off", toggle: true, color: "#2563EB" },
            { icon: MapPin, label: "Default Route", value: "B12 - North Gate", toggle: false, color: "#7C3AED" },
            { icon: Shield, label: "Privacy & Security", value: "", toggle: false, color: "#059669" },
            { icon: HelpCircle, label: "Help & Support", value: "", toggle: false, color: "#F59E0B" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.toggle) setNotifEnabled(!notifEnabled);
                  }}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: item.color + "15",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color={item.color} />
                  </div>
                  <span style={{ flex: 1, fontSize: "13px", fontWeight: 500, color: "#374151", fontFamily: "'Poppins', sans-serif" }}>
                    {item.label}
                  </span>
                  {item.toggle ? (
                    <div
                      style={{
                        width: "40px",
                        height: "22px",
                        backgroundColor: notifEnabled ? "#2563EB" : "#CBD5E1",
                        borderRadius: "11px",
                        position: "relative",
                        transition: "background 0.2s",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: notifEnabled ? "21px" : "3px",
                          width: "16px",
                          height: "16px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          transition: "left 0.2s",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      {item.value && (
                        <span style={{ fontSize: "12px", color: "#94A3B8", fontFamily: "'Poppins', sans-serif" }}>
                          {item.value}
                        </span>
                      )}
                      <ChevronRight size={14} color="#CBD5E1" />
                    </div>
                  )}
                </button>
                {idx < 3 && (
                  <div style={{ height: "1px", backgroundColor: "#F8FAFC", marginLeft: "64px" }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#FFF1F2",
            border: "1.5px solid #FECDD3",
            borderRadius: "14px",
            color: "#E11D48",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <LogOut size={16} />
          Sign Out
        </button>

        <p style={{ textAlign: "center", fontSize: "11px", color: "#CBD5E1", marginTop: "16px", fontFamily: "'Poppins', sans-serif" }}>
          BusMate v2.1.0 • Greenfield University
        </p>
      </div>
    </div>
  );
}