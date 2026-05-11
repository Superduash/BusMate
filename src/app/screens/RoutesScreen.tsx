import { useState } from "react";
import { Search, Clock, MapPin, ChevronDown, ChevronUp, Bus } from "lucide-react";

const routes = [
  {
    id: "B12",
    name: "North Campus Express",
    color: "#2563EB",
    from: "North Gate",
    to: "Main Block",
    stops: ["North Gate", "East Colony", "Central Park", "Science Block", "Library", "Main Block"],
    timings: ["7:30 AM", "9:00 AM", "1:30 PM", "5:00 PM"],
    duration: "42 min",
    totalStops: 6,
  },
  {
    id: "B07",
    name: "East-West Connector",
    color: "#7C3AED",
    from: "East Colony",
    to: "Sports Complex",
    stops: ["East Colony", "Market", "Student Housing", "Admin Block", "Sports Complex"],
    timings: ["7:45 AM", "9:30 AM", "2:00 PM", "5:30 PM"],
    duration: "35 min",
    totalStops: 5,
  },
  {
    id: "B03",
    name: "Campus Circle",
    color: "#059669",
    from: "Main Gate",
    to: "Main Gate",
    stops: ["Main Gate", "Hostel Block A", "Hostel Block B", "Cafeteria", "Labs", "Main Gate"],
    timings: ["8:00 AM", "10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
    duration: "30 min",
    totalStops: 6,
  },
  {
    id: "B15",
    name: "South Shuttle",
    color: "#DC2626",
    from: "South Colony",
    to: "Engineering Block",
    stops: ["South Colony", "Residential Area", "Pharmacy", "Engineering Block"],
    timings: ["8:15 AM", "11:00 AM", "3:30 PM", "6:30 PM"],
    duration: "28 min",
    totalStops: 4,
  },
];

export function RoutesScreen() {
  const [search, setSearch] = useState("");
  const [expandedRoute, setExpandedRoute] = useState<string | null>("B12");

  const filtered = routes.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.from.toLowerCase().includes(search.toLowerCase()) ||
      r.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100%", fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px 20px 12px",
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", margin: "0 0 12px", fontFamily: "'Poppins', sans-serif" }}>
          Bus Routes
        </h2>
        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F8FAFC",
            border: "1.5px solid #E2E8F0",
            borderRadius: "12px",
            padding: "0 14px",
            height: "44px",
            gap: "10px",
          }}
        >
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search routes, stops..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "13px",
              color: "#374151",
              backgroundColor: "transparent",
              fontFamily: "'Poppins', sans-serif",
            }}
          />
        </div>
      </div>

      {/* Route Stats Bar */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #F1F5F9",
          padding: "8px 20px",
          gap: "16px",
        }}
      >
        {[
          { label: "Total Routes", value: "4" },
          { label: "Active Now", value: "3" },
          { label: "Total Stops", value: "21" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center", flex: 1 }}>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "#2563EB", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              {stat.value}
            </p>
            <p style={{ fontSize: "10px", color: "#64748B", margin: "1px 0 0", fontFamily: "'Poppins', sans-serif" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Routes List */}
      <div style={{ padding: "16px 20px" }}>
        {filtered.map((route) => {
          const isExpanded = expandedRoute === route.id;
          return (
            <div
              key={route.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                marginBottom: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: `1.5px solid ${isExpanded ? route.color + "40" : "#F1F5F9"}`,
                transition: "all 0.2s",
              }}
            >
              {/* Route Header */}
              <button
                onClick={() => setExpandedRoute(isExpanded ? null : route.id)}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                {/* Bus Badge */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: route.color + "15",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Bus size={16} color={route.color} />
                  <span style={{ fontSize: "9px", fontWeight: 700, color: route.color, fontFamily: "'Poppins', sans-serif", marginTop: "2px" }}>
                    {route.id}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                        {route.name}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "3px" }}>
                        <MapPin size={10} color="#94A3B8" />
                        <p style={{ fontSize: "11px", color: "#64748B", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                          {route.from} → {route.to}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp size={16} color="#94A3B8" />
                    ) : (
                      <ChevronDown size={16} color="#94A3B8" />
                    )}
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <div
                      style={{
                        backgroundColor: "#F8FAFC",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Clock size={10} color="#64748B" />
                      <span style={{ fontSize: "11px", color: "#64748B", fontFamily: "'Poppins', sans-serif" }}>
                        {route.duration}
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#F8FAFC",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <MapPin size={10} color="#64748B" />
                      <span style={{ fontSize: "11px", color: "#64748B", fontFamily: "'Poppins', sans-serif" }}>
                        {route.totalStops} stops
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div style={{ borderTop: `1px solid ${route.color}20`, padding: "0 16px 16px" }}>
                  {/* Timings */}
                  <div style={{ marginBottom: "14px", paddingTop: "12px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 8px", fontFamily: "'Poppins', sans-serif" }}>
                      Daily Timings
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {route.timings.map((time) => (
                        <div
                          key={time}
                          style={{
                            backgroundColor: route.color + "12",
                            padding: "5px 10px",
                            borderRadius: "8px",
                            border: `1px solid ${route.color}25`,
                          }}
                        >
                          <span style={{ fontSize: "12px", fontWeight: 500, color: route.color, fontFamily: "'Poppins', sans-serif" }}>
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Boarding Points */}
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px", fontFamily: "'Poppins', sans-serif" }}>
                      Boarding Points
                    </p>
                    {route.stops.map((stop, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: idx < route.stops.length - 1 ? "0" : "0",
                        }}
                      >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "16px", flexShrink: 0 }}>
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor:
                                idx === 0 || idx === route.stops.length - 1 ? route.color : "white",
                              border: `2px solid ${route.color}`,
                              flexShrink: 0,
                              marginTop: "5px",
                            }}
                          />
                          {idx < route.stops.length - 1 && (
                            <div
                              style={{
                                width: "2px",
                                height: "18px",
                                backgroundColor: route.color + "40",
                                borderRadius: "1px",
                                marginTop: "2px",
                              }}
                            />
                          )}
                        </div>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: idx === 0 || idx === route.stops.length - 1 ? 600 : 400,
                            color: idx === 0 || idx === route.stops.length - 1 ? route.color : "#374151",
                            margin: 0,
                            padding: "4px 0 16px",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {stop}
                          {idx === 0 && (
                            <span style={{ fontSize: "10px", color: route.color, fontWeight: 500 }}> (Origin)</span>
                          )}
                          {idx === route.stops.length - 1 && (
                            <span style={{ fontSize: "10px", color: route.color, fontWeight: 500 }}> (Destination)</span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <Search size={32} color="#CBD5E1" style={{ marginBottom: "12px" }} />
            <p style={{ fontSize: "14px", color: "#94A3B8", fontFamily: "'Poppins', sans-serif" }}>
              No routes found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
