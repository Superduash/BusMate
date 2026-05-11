import { Outlet, useNavigate, useLocation } from "react-router";
import { Home, MapPin, Map, Bell, User } from "lucide-react";

const navItems = [
  { path: "/app/home", icon: Home, label: "Home" },
  { path: "/app/track", icon: MapPin, label: "Track" },
  { path: "/app/routes", icon: Map, label: "Routes" },
  { path: "/app/notifications", icon: Bell, label: "Alerts" },
  { path: "/app/profile", icon: User, label: "Profile" },
];

export function MobileLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#F0F4F8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "390px",
          height: "844px",
          backgroundColor: "#F8FAFC",
          borderRadius: "40px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: "8px solid #1a1a2e",
        }}
      >
        {/* Status Bar */}
        <div
          style={{
            height: "44px",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "24px",
            paddingRight: "20px",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>9:41</span>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
              {[3, 5, 7, 9].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "3px",
                    height: `${h}px`,
                    backgroundColor: i < 3 ? "#111827" : "#CBD5E1",
                    borderRadius: "1px",
                  }}
                />
              ))}
            </div>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 2.5C9.8 2.5 11.4 3.3 12.5 4.5L14 3C12.5 1.4 10.4 0.5 8 0.5C5.6 0.5 3.5 1.4 2 3L3.5 4.5C4.6 3.3 6.2 2.5 8 2.5Z" fill="#111827"/>
              <path d="M8 5.5C9 5.5 9.9 5.9 10.5 6.6L12 5.1C11 4.1 9.6 3.5 8 3.5C6.4 3.5 5 4.1 4 5.1L5.5 6.6C6.1 5.9 7 5.5 8 5.5Z" fill="#111827"/>
              <circle cx="8" cy="9" r="1.5" fill="#111827"/>
            </svg>
            <div
              style={{
                width: "25px",
                height: "12px",
                border: "1.5px solid #111827",
                borderRadius: "3px",
                padding: "1.5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "18px", height: "7px", backgroundColor: "#111827", borderRadius: "1px" }} />
              <div style={{ width: "2px", height: "5px", backgroundColor: "#111827", marginLeft: "1px", borderRadius: "1px" }} />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          <Outlet />
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            height: "72px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingBottom: "8px",
            flexShrink: 0,
            boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
          }}
        >
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "28px",
                    backgroundColor: isActive ? "#EFF6FF" : "transparent",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <Icon
                    size={18}
                    color={isActive ? "#2563EB" : "#94A3B8"}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#2563EB" : "#94A3B8",
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.3px",
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}