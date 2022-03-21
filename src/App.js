import "./App.css";
import { useState } from "react";
import SideNav from "./components/NavBar/SideNav";
import Content from "./components/Content";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <div className="h-screen grid grid-cols-custom-sidenav-layout">
      <SideNav activePage={activePage} setActivePage={setActivePage} />
      <Content title={activePage} />
    </div>
  );
}

export default App;
