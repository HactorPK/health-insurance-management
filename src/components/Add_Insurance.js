import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/addInsurance.css";

//sets initial state of variables
const initialState = {
  insurance_name: "",
  insurance_premium: "",
  insurance_age_limit: "",
};
function AddInsurance() {
  const [state, setState] = useState(initialState);

  const { insurance_name, insurance_premium, insurance_age_limit } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  //useEffect runs to fetch policy data
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getinsurance/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);
  
  //only runs when change is made on input fields.
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value }); //sets state of variables to new inputted values. 
    //done by mapping
  };

  //runs when save button is clicked
  const handleSubmit = (e) => {
    e.preventDefault(); //shouldn't submit on just any event.
    //toast of error message if one of fields is missing.
    if (!insurance_name || !insurance_premium || !insurance_age_limit) {
      toast.error("please provide value into each input field");
    } else {
      //if all fields are filled in
      if (!id) {
        //insert the insurance into backend by axios post
        axios
          .post("http://localhost:3001/insertinsurance", {
            insurance_name: insurance_name,
            insurance_premium: insurance_premium,
            insurance_age_limit: insurance_age_limit,
          })
          .then((res) => console.log(res.data))
          .catch((err) => toast.error(err));
        toast.success("Insurance Added Succesfully");
      }
      else{
        //if in edit mode , make edit insurance call put instead of post for modifying.
        axios.put(`http://localhost:3001/editinsurance/${id}`, {
          insurance_name: insurance_name,
          insurance_premium: insurance_premium,
          insurance_age_limit: insurance_age_limit,
        })
        .then((res) => console.log(res.data))
        .catch((err) => toast.error(err));
      toast.success("Insurance Updated Succesfully");
      }
      //after 1000 ms, view insurances open automatically.
      setTimeout(() => {
        navigate("/viewinsurances", 1000);
      });
    }
  };
  //jsx used for display.
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            name="insurance_name"
            id="insurance_name"
            value={insurance_name || ""}
            placeholder="Insurance Name"
            required
            onChange={handleinputChange}
          />
        </fieldset>

        <fieldset>
          <input
            className="number-input"
            type="number"
            name="insurance_premium"
            id="insurance_premium"
            value={insurance_premium || ""}
            placeholder="Insurance Price"
            required
            onChange={handleinputChange}
          />
        </fieldset>

        <fieldset>
          <input
            className="number-input"
            type="Number"
            name="insurance_age_limit"
            id="insurance_age_limit"
            value={insurance_age_limit || ""}
            placeholder="Insurance Age limit"
            required
            onChange={handleinputChange}
          />
        </fieldset>

        
        <input type="submit" value = {id ? "Update" : "Save"}/>
        <Link to="/viewinsurances">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
}
export default AddInsurance;
