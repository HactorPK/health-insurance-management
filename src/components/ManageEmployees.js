import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/employees.css";

//mother function for viewing employees
function ViewEmployees() {
  const [employeeList, setEmployeeList] = useState([]);

  //fetches all employees from DB
  const loadEmployees = async () => {
    const response = await axios.get("http://localhost:3001/viewemployees");
    setEmployeeList(response.data);
  };
  //useEffect is used to autorun the function loadEmployees
  useEffect(() => {
    loadEmployees();
  }, []);
  
  //function called when a deletion request is made on click of delete button
  const removeEmployee = (id) => {
    //confirm if user wants to delete, preventing mistakes as this is an undoable move
    if (window.confirm("Are you sure you want to remove this employee ?")) {
      //if above produces true value, deletion is done by axios delete call. 
      //deletion mapped on id 
      axios.delete(`http://localhost:3001/removeemp/${id}`);
      //confirm successful deletion by toast.
      toast.success("Employee Record Successfully Removed");
      //load the employees in 500ms after deletion
      setTimeout(() => loadEmployees(), 500);
    }
  };

  //some jsx for designing table
  return (
    <div style={{ marginTop: "150px" }} className="container-div"> 
    {/* inline css is used to override file css as file css is used as template for ViewInsurances.js */}
      <ToastContainer />
      {/* toast container to control where toast appears relative to table */}
      <table className="styled-table">
        <thead>
          {/* table head names/ column names are given below */}
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}>Employee Name</th>
            <th style={{ textAlign: "center" }}>Employee Email</th>
            <th style={{ textAlign: "center" }}>Employee Insurance </th>
          </tr>
        </thead>
        <tbody>
          {/* mapping fetched employee list to table, using index */}
          {employeeList.map((item, index) => {
            return (
              <tr key={item.employeeID}>
                <th scope="row">{index + 1}</th>
                <td>{item.employee_name}</td>
                <td>{item.employee_email}</td>
                <td>{item.insurance_name}</td>
                <td>
                  {/* redirection made when edit details is clicked */}
                  <Link to={`/updateemp/${item.employeeID}`}>
                    <button className="btn-edit"> Edit Details</button>
                  </Link>
                  <button
                    className="btn-delete"
                    onClick={() => removeEmployee(item.employeeID)}
                    // click of delete button removes employee by id
                  >
                    {" "}
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
          
        <div className="btn-div">

          <form action="http://localhost:3000/home">
            <button className="btn-back-emp"> Back </button>
          </form>
          <form action="http://localhost:3000/insertemployee">
            <button className="btn-employee-emp">Add Employee</button>
          </form>
        </div>

    </div>
  );
}
export default ViewEmployees;
