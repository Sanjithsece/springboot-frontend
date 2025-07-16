import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import GetEmployees from "./components/GetEmployees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/signup" element={<Signup/>} />
        <Route path= "/getemployees" element={<GetEmployees/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
