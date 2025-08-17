import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState,useEffect } from "react"
import Home from "./components/Home";
import About from "./components/About";
import Clinic from "./components/Clinic";
import Diagnostic from "./components/Diagnostic";
import Booking from "./components/Booking";

function App() {

  const [token,setToken]=useState("");

  useEffect(()=>{
    setToken(localStorage.getItem("token"));
  },[]);

  const handleLogout=()=>{
    localStorage.removeItem("token");
    setToken(null);
  }  




  return (
    <>
    <Router>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken}/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={token ? <Home token={token} onLogout={handleLogout}/> : <Navigate to="/" />}/>
      <Route path="/about" element={token ? <About token={token} onLogout={handleLogout}/> : <Navigate to="/" />}/>
      <Route path="/clinics" element={token ? <Clinic token={token} onLogout={handleLogout}/> : <Navigate to="/" />}/>
      <Route path="/diagnostics" element={token ? <Diagnostic token={token} onLogout={handleLogout}/> : <Navigate to="/" />}/>
      <Route path="/bookings" element={token ? <Booking token={token} onLogout={handleLogout}/> : <Navigate to="/" />}/>

    </Routes>

    </Router>
    </>

  )
}

export default App
