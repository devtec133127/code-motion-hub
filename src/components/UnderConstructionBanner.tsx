// src/components/UnderConstructionBanner.tsx
export default function UnderConstructionBanner() {
  return (
    <div style={{
      backgroundColor: "#f39c12",
      color: "white",
      textAlign: "center",
      padding: "0.5rem",
      fontWeight: "bold",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000
    }}>
      ⚠️ Diese Seite befindet sich noch im Aufbau
    </div>
  )
}

