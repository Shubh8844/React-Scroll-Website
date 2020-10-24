import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
    </div>
  );
}
