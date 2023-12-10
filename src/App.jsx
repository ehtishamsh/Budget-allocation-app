import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Context01 from "./components/React_Context_API/Profile";
import Header from "./components/React_Context_API/Header";
import Home from "./components/React_Context_API/Home";
import Profile from "./components/React_Context_API/Profile";
import Menu from "./components/React_Context_API/Menu";
import { useState } from "react";
import { createContext } from "react";

function App() {
  const [userName, setUserName] = useState("Ehtisham");
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="menu" element={<Menu />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;

export const AppContext = createContext();
