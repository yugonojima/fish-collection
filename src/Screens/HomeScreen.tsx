import React from "react";
import TemporaryDrawer from "../Componets/SideMenu";

const HomeScreen = () => {
  const styles = {
    header: {
      backgroundColor: "#666",
      height: "60px",
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <div>
      <header style={styles.header}>
        <TemporaryDrawer />
        <button style={{ width: "7%" }}>ログイン</button>
      </header>
    </div>
  );
};

export default HomeScreen;
