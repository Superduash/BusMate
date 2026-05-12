import { useState } from "react";
import { AlertTriangle, CheckCircle, Info, Clock, MapPin, Bell, Trash2 } from "lucide-react";

type NotifType = "delay" | "arrival" | "route-change" | "info";

interface Notification {
  id: number;
  type: NotifType;
  title: string;
  message: string;
  time: string;
  busId: string;
  read: boolean;
}

const initialNotifs: Notification[] = [
  {
    id: 1,
    type: "delay",
    title: "Bus B07 Delayed",
    message: "Bus B07 is running 8 minutes late due to heavy traffic near East Colony junction.",
    time: "2 min ago",
    busId: "B07",
    read: false,
  },
  {
    id: 2,
    type: "arrival",
    title: "Bus B12 Arriving Soon",
    message: "Bus B12 will arrive at North Gate in approximately 5 minutes. Get ready!",
    time: "8 min ago",
    busId: "B12",
    read: false,
  },
  {
    id: 3,
    type: "route-change",
    title: "Route Change — B03",
    message: "Due to road maintenance, Bus B03 will take an alternate route via Admin Block today.",
    time: "25 min ago",
    busId: "B03",
    read: false,
  },
  {
    id: 4,
    type: "arrival",
    title: "Bus B15 Arrived",
    message: "Bus B15 has arrived at Engineering Block on schedule.",
    time: "1 hr ago",
    busId: "B15",
    read: true,
  },
  {
    id: 5,
    type: "info",
    title: "Schedule Update",
    message: "Tomorrow's afternoon buses will depart 30 minutes earlier due to college event.",
    time: "3 hrs ago",
    busId: "ALL",
    read: true,
  },
  {
    id: 6,
    type: "delay",
    title: "Bus B12 Delayed Yesterday",
    message: "Bus B12 was delayed 12 minutes on the morning run due to heavy rain.",
    time: "Yesterday",
    busId: "B12",
    read: true,
  },
  {
    id: 7,
    type: "info",
    title: "Weekend Schedule",
    message: "Special weekend buses will operate on Saturday. Check routes screen for timings.",
    time: "2 days ago",
    busId: "ALL",
    read: true,
  },
];

const typeConfig: Record<NotifType, { icon: any; color: string; bg: string; borderColor: string }> = {
  delay: { icon: AlertTriangle, color: "#F59E0B", bg: "#FFFBEB", borderColor: "#FDE68A" },
  arrival: { icon: CheckCircle, color: "#22C55E", bg: "#F0FDF4", borderColor: "#BBF7D0" },
  "route-change": { icon: MapPin, color: "#7C3AED", bg: "#FAF5FF", borderColor: "#DDD6FE" },
  info: { icon: Info, color: "#2563EB", bg: "#EFF6FF", borderColor: "#BFDBFE" },
};

export function NotificationsScreen() {
  const [notifs, setNotifs] = useState(initialNotifs);
  const [activeFilter, setActiveFilter] = useState<"all" | NotifType>("all");

  const unreadCount = notifs.filter((n) => !n.read).length;

  const filtered = activeFilter === "all" ? notifs : notifs.filter((n) => n.type === activeFilter);

  const markAllRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotif = (id: number) => {
    setNotifs((prev) => prev.filter((n) => n.id !== id));
  };

  const markRead = (id: number) => {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100%", fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px 20px 0",
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Notifications
            </h2>
            {unreadCount > 0 && (
              <div
                style={{
                  backgroundColor: "#2563EB",
                  borderRadius: "20px",
                  padding: "2px 8px",
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 600, color: "white", fontFamily: "'Poppins', sans-serif" }}>
                  {unreadCount} new
                </span>
              </div>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              style={{
                background: "none",
                border: "none",
                fontSize: "12px",
                color: "#2563EB",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Mark all read
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: "6px", paddingBottom: "0", overflowX: "auto" }}>
          {(["all", "delay", "arrival", "route-change", "info"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "7px 14px",
                borderRadius: "10px 10px 0 0",
                border: "none",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: activeFilter === filter ? 600 : 400,
                color: activeFilter === filter ? "#2563EB" : "#64748B",
                backgroundColor: activeFilter === filter ? "#EFF6FF" : "transparent",
                fontFamily: "'Poppins', sans-serif",
                whiteSpace: "nowrap",
                borderBottom: activeFilter === filter ? "2px solid #2563EB" : "2px solid transparent",
              }}
            >
              {filter === "all" ? "All" :
               filter === "delay" ? "Delays" :
               filter === "arrival" ? "Arrivals" :
               filter === "route-change" ? "Routes" : "Info"}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div style={{ padding: "16px 20px" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <Bell size={36} color="#CBD5E1" style={{ marginBottom: "12px" }} />
            <p style={{ fontSize: "14px", color: "#94A3B8", fontFamily: "'Poppins', sans-serif" }}>
              No notifications
            </p>
          </div>
        )}

        {/* Today section */}
        {filtered.some((n) => ["2 min ago", "8 min ago", "25 min ago", "1 hr ago", "3 hrs ago"].includes(n.time)) && (
          <>
            <p style={{ fontSize: "11px", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 10px", fontFamily: "'Poppins', sans-serif" }}>
              Today
            </p>
            {filtered
              .filter((n) => ["2 min ago", "8 min ago", "25 min ago", "1 hr ago", "3 hrs ago"].includes(n.time))
              .map((notif) => (
                <NotifCard key={notif.id} notif={notif} onDelete={deleteNotif} onRead={markRead} />
              ))}
          </>
        )}

        {/* Earlier section */}
        {filtered.some((n) => ["Yesterday", "2 days ago"].includes(n.time)) && (
          <>
            <p style={{ fontSize: "11px", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "1px", margin: "8px 0 10px", fontFamily: "'Poppins', sans-serif" }}>
              Earlier
            </p>
            {filtered
              .filter((n) => ["Yesterday", "2 days ago"].includes(n.time))
              .map((notif) => (
                <NotifCard key={notif.id} notif={notif} onDelete={deleteNotif} onRead={markRead} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

function NotifCard({
  notif,
  onDelete,
  onRead,
}: {
  notif: Notification;
  onDelete: (id: number) => void;
  onRead: (id: number) => void;
}) {
  const config = typeConfig[notif.type];
  const Icon = config.icon;

  return (
    <div
      onClick={() => onRead(notif.id)}
      style={{
        backgroundColor: notif.read ? "#ffffff" : config.bg,
        borderRadius: "16px",
        padding: "14px",
        marginBottom: "10px",
        border: `1.5px solid ${notif.read ? "#F1F5F9" : config.borderColor}`,
        display: "flex",
        gap: "12px",
        cursor: "pointer",
        position: "relative",
        boxShadow: notif.read ? "none" : "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Unread Indicator */}
      {!notif.read && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "44px",
            width: "7px",
            height: "7px",
            backgroundColor: config.color,
            borderRadius: "50%",
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: config.color + "18",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={18} color={config.color} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: notif.read ? 500 : 600,
              color: "#111827",
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
              flex: 1,
              paddingRight: "8px",
            }}
          >
            {notif.title}
          </p>
        </div>
        <p
          style={{
            fontSize: "11px",
            color: "#64748B",
            margin: "0 0 6px",
            lineHeight: "1.5",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {notif.message}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                backgroundColor: config.color + "15",
                padding: "2px 7px",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 600, color: config.color, fontFamily: "'Poppins', sans-serif" }}>
                {notif.busId}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <Clock size={10} color="#94A3B8" />
              <span style={{ fontSize: "10px", color: "#94A3B8", fontFamily: "'Poppins', sans-serif" }}>
                {notif.time}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Delete */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(notif.id);
        }}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Trash2 size={13} color="#CBD5E1" />
      </button>
    </div>
  );
}
