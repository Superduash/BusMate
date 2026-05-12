import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/app/home");
  };

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
            backgroundColor: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "24px",
            paddingRight: "20px",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>9:41</span>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
              {[3, 5, 7, 9].map((h, i) => (
                <div key={i} style={{ width: "3px", height: `${h}px`, backgroundColor: "white", borderRadius: "1px" }} />
              ))}
            </div>
            <div style={{ width: "25px", height: "12px", border: "1.5px solid white", borderRadius: "3px", padding: "1.5px", display: "flex", alignItems: "center" }}>
              <div style={{ width: "18px", height: "7px", backgroundColor: "white", borderRadius: "1px" }} />
            </div>
          </div>
        </div>

        {/* Top Wave */}
        <div
          style={{
            background: "linear-gradient(160deg, #2563EB 0%, #1D4ED8 100%)",
            padding: "32px 28px 48px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "40px",
              backgroundColor: "#F8FAFC",
              borderRadius: "40px 40px 0 0",
            }}
          />
          {/* College Logo Placeholder */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L4 12V14H36V12L20 4Z" fill="white" opacity="0.9"/>
                <rect x="7" y="16" width="6" height="16" rx="1" fill="white" opacity="0.8"/>
                <rect x="17" y="16" width="6" height="16" rx="1" fill="white" opacity="0.8"/>
                <rect x="27" y="16" width="6" height="16" rx="1" fill="white" opacity="0.8"/>
                <rect x="4" y="32" width="32" height="3" rx="1" fill="white" opacity="0.9"/>
                <polygon points="20,2 22,8 18,8" fill="#FCD34D"/>
              </svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                GREENFIELD UNIVERSITY
              </p>
              <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700, margin: "4px 0 0", fontFamily: "'Poppins', sans-serif" }}>
                Bus<span style={{ color: "#FCD34D" }}>Mate</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ flex: 1, padding: "8px 28px 28px", overflowY: "auto" }}>
          <div style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#111827", margin: "0 0 4px", fontFamily: "'Poppins', sans-serif" }}>
              Welcome back 👋
            </h3>
            <p style={{ fontSize: "13px", color: "#64748B", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
              Sign in to track your college bus
            </p>
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "8px", letterSpacing: "0.5px", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif" }}>
              Email Address
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                border: "1.5px solid #E2E8F0",
                borderRadius: "14px",
                padding: "0 16px",
                height: "52px",
                gap: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <Mail size={18} color="#94A3B8" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@greenfield.edu"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "#111827",
                  backgroundColor: "transparent",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "12px" }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "8px", letterSpacing: "0.5px", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif" }}>
              Password
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                border: "1.5px solid #E2E8F0",
                borderRadius: "14px",
                padding: "0 16px",
                height: "52px",
                gap: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <Lock size={18} color="#94A3B8" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "#111827",
                  backgroundColor: "transparent",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                {showPassword ? <EyeOff size={18} color="#94A3B8" /> : <Eye size={18} color="#94A3B8" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: "right", marginBottom: "28px" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#2563EB",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              height: "54px",
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
              border: "none",
              borderRadius: "16px",
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)",
              letterSpacing: "0.3px",
            }}
          >
            Sign In
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#E2E8F0" }} />
            <span style={{ fontSize: "12px", color: "#94A3B8", fontFamily: "'Poppins', sans-serif" }}>or continue with</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#E2E8F0" }} />
          </div>

          {/* College SSO */}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#ffffff",
              border: "1.5px solid #E2E8F0",
              borderRadius: "16px",
              color: "#374151",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L2 6V7H18V6L10 2Z" fill="#2563EB"/>
              <rect x="3.5" y="8" width="3" height="8" rx="0.5" fill="#2563EB" opacity="0.7"/>
              <rect x="8.5" y="8" width="3" height="8" rx="0.5" fill="#2563EB" opacity="0.7"/>
              <rect x="13.5" y="8" width="3" height="8" rx="0.5" fill="#2563EB" opacity="0.7"/>
              <rect x="2" y="16" width="16" height="2" rx="0.5" fill="#2563EB"/>
            </svg>
            College SSO Login
          </button>
        </div>
      </div>
    </div>
  );
}