import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/insurances.css";


//mother function to view all insurances
function ViewInsurances() {
  //list of all insurances in an empty array
  const [insuranceList, setInsuranceList] = useState([]);

  //fetch all insurances from DB
  const loadInsurances = async () => {
    const response = await axios.get("http://localhost:3001/viewinsurances");
    setInsuranceList(response.data);
  };

  useEffect(() => {
    loadInsurances();
  }, []);

  //api call to delete an insurance
  const deleteInsurance = (id) => {
    if (window.confirm("Are you sure you want to delete this Insurance ?")) {
      axios.delete(`http://localhost:3001/remove/${id}`);
      toast.success("Insurance Deleted Successfully");
      setTimeout(() => loadInsurances(), 500);
    }
  };
  //jsx with container-div as a template css also used in viewing employees
  return (
    <div style={{ marginTop: "150px" }} className="container-div">
      <ToastContainer />
      <Link to="/insertinsurance"></Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}>Insurance Name</th>
            <th style={{ textAlign: "center" }}>Insurance Premium</th>
            <th style={{ textAlign: "center" }}>Insurance Age Limit </th>
          </tr>
        </thead>
        <tbody>
          {/* mapping insurances to table view */}
          {insuranceList.map((item, index) => {
            return (
              <tr key={item.insuranceID}>
                <th scope="row">{index + 1}</th>
                <td>{item.insurance_name}</td>
                <td>{item.insurance_premium}</td>
                <td>{item.insurance_age_limit}</td>
                <td>
                  <Link to={`/update/${item.insuranceID}`}>
                    <button className="btn btn-edit"> Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteInsurance(item.insuranceID)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className = "btns-back-add">
        <form action="http://localhost:3000/home">
          <button className="btn-back-ins" >
          Back
        </button>
        </form>
        
        <form action="http://localhost:3000/insertinsurance">
        <button className="btn-add-ins">Add Insurance</button>

        </form>
      </div>
    </div>
  );
}
export default ViewInsurances;
