import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/React_Query/Header";
import Home from "./components/React_Query/Home";
import Profile from "./components/React_Query/Profile";
import Menu from "./components/React_Query/Menu";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const client = new QueryClient();
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
      </Router>

      {/* CONTEXT API CODE
      import { useState } from "react";
import { createContext } from "react"; */}
      {/* const [userName, setUserName] = useState("Ehtisham"); */}
      {/* <AppContext.Provider value={{ userName, setUserName }}>


      {-----------------router code here------------------}


      </AppContext.Provider> 
      
      export const AppContext = createContext();*/}
    </>
  );
}

export default App;
