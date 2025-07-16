import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";
import Empdetails from "./components/Empdetails";
import Addemp from "./components/Addemp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path= "/Employee" element={<Empdetails/>}/>
        <Route path= "/Addemp" element={<Addemp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
