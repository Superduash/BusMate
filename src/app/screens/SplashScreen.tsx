import { useEffect } from "react";
import { useNavigate } from "react-router";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

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
          background: "linear-gradient(160deg, #2563EB 0%, #1D4ED8 50%, #1E3A8A 100%)",
          borderRadius: "40px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "8px solid #1a1a2e",
        }}
      >
        {/* Background Circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "-100px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        />

        {/* Logo Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            zIndex: 1,
          }}
        >
          {/* Bus Icon Container */}
          <div
            style={{
              width: "96px",
              height: "96px",
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              {/* Bus Body */}
              <rect x="4" y="14" width="44" height="26" rx="6" fill="white" opacity="0.95"/>
              {/* Windshield */}
              <rect x="8" y="18" width="12" height="10" rx="2" fill="#2563EB" opacity="0.8"/>
              {/* Windows */}
              <rect x="24" y="18" width="8" height="8" rx="2" fill="#93C5FD"/>
              <rect x="35" y="18" width="8" height="8" rx="2" fill="#93C5FD"/>
              {/* Door */}
              <rect x="24" y="28" width="8" height="10" rx="1" fill="#BFDBFE"/>
              {/* Wheels */}
              <circle cx="13" cy="42" r="5" fill="#0F172A"/>
              <circle cx="13" cy="42" r="2.5" fill="#64748B"/>
              <circle cx="39" cy="42" r="5" fill="#0F172A"/>
              <circle cx="39" cy="42" r="2.5" fill="#64748B"/>
              {/* Front detail */}
              <rect x="4" y="31" width="4" height="6" rx="1" fill="#FCD34D"/>
              <rect x="44" y="31" width="4" height="6" rx="1" fill="#FCD34D"/>
              {/* Roof detail */}
              <rect x="8" y="10" width="36" height="6" rx="3" fill="rgba(255,255,255,0.6)"/>
            </svg>
          </div>

          {/* App Name */}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-1px",
                margin: 0,
                lineHeight: 1,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Bus<span style={{ color: "#FCD34D" }}>Mate</span>
            </h1>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "10px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Track Your College Bus Easily
            </p>
          </div>

          {/* Loading Dots */}
          <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: i === 0 ? "#ffffff" : "rgba(255,255,255,0.4)",
                  animation: `pulse ${0.8 + i * 0.2}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            College Campus Edition v2.1
          </p>
        </div>
      </div>
    </div>
  );
}
