import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/Login.js";
import ViewInsurances from "./components/ViewInsurances";
import { InsertInsurance } from "./components/InsertInsurance";
import { InsertEmployee } from "./components/InsertEmployee";
import ViewEmployees from "./components/ManageEmployees";
import { AdminHome } from "./components/Admin_home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/viewinsurances" element={<ViewInsurances />} />
          <Route path="/insertinsurance" element={<InsertInsurance />} />
          <Route path="/update/:id" element={<InsertInsurance />} />
          <Route path="/updateemp/:id" element={<InsertEmployee />} />

          <Route path="/viewemployees" element={<ViewEmployees />} />
          <Route path="/insertemployee" element={<InsertEmployee />} />
          <Route path="/home" element={<AdminHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
