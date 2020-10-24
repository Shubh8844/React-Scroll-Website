import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
export default function Home() {
  const [isOpen, SetisOpen] = useState(false);

  const toggle = () => {
    SetisOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
}
