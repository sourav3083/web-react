import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Home Page</h1>

      <button style={styles.button} onClick={() => navigate("/products")}>
        Go to Products
      </button>

      <button style={styles.logout} onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },
  button: {
    padding: "12px 20px",
    marginRight: "10px",
    background: "green",
    color: "#fff",
    border: "none",
    borderRadius: "5px"
  },
  logout: {
    padding: "12px 20px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};
