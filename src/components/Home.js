import React from "react";
import "../styles/home.css";
//this is the home page
function Home() {
  //easy to grasp jsx below, different class names for styling used
  return (
    <div className="home-tab">
      <h1 className="txt-options">There's always an option for you...</h1>
      <div className="emp-policies-div">
        <form action="http://localhost:3000/viewinsurances">
          <button className="btn-insurance-home">Policy Portal</button>
        </form>

        <form action="http://localhost:3000/viewemployees">
          <button className="btn-employee-home">Employee Portal</button>
        </form>
      </div>
      <form action="http://localhost:3000/login">
        <button className="btn-back-home"> Sign Out </button>
      </form>
    </div>
  );
}

export default Home;
