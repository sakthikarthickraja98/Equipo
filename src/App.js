import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Users from "./pages/Users";
import Protections from "./pages/Protections";
import Ambulance from "./pages/Ambulance";
import FirstAid from "./pages/Firstaid";
import Records from "./pages/Records";
import Building from "./pages/Building";
import News from "./pages/News";
import Temperature from "./pages/Temperature";
import Medicine from "./pages/Medicine";
import Doctors from "./pages/Doctors";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Patients />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/protection" element={<Protections />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/records" element={<Records />} />
          <Route path="/building" element={<Building />} />
          <Route path="/news" element={<News />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
