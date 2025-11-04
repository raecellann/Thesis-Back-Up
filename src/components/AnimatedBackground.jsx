import React from "react";

const AnimatedBackground = () => {
  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#FDFBEE",
      zIndex: -1,
    },
    left: {
      position: "absolute",
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(80deg, rgb(5, 124, 172), rgba(23, 138, 247, 0.8))",
      filter: "blur(100px)",
      opacity: 0.7,
      animation: "leftMove 10s infinite",
    },
    right: {
      position: "absolute",
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(80deg, rgba(247, 45, 210, 0.929), rgba(204, 89, 250, 0.8))",
      filter: "blur(100px)",
      opacity: 0.7,
      animation: "rightMove 10s infinite",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes leftMove {
            0%, 100% { left: -100px; }
            70% { left: 700px; }
          }

          @keyframes rightMove {
            0%, 100% { right: -100px; }
            70% { right: 1300px; }
          }
        `}
      </style>

      <div style={styles.container}>
        <section style={styles.left}></section>
        <section style={styles.right}></section>
      </div>
    </>
  );
};

export default AnimatedBackground;
