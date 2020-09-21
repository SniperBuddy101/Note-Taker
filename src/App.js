import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import NoteSection from "./components/NoteSection";
import CopyrightSection from "./components/CopyrightSection";

function App() {
  return (
    <div className="main">
    <Heading />
    <NoteSection />
    <CopyrightSection />      
    </div>
  );
}

export default App;
