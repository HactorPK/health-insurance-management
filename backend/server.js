const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());


const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Handsome123",
  database: "DB",
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username)
  console.log(password)
  con.query(
    "SELECT * FROM users WHERE username = ? AND userpassword = ?",
    [username, password],
    (err, data) => {
      if (err) console.log(err)
      if (data.length > 0) {
        return res.json("logged in");
      } else {
        return res.json("No record found");
      }
    }
  );
});

app.post("/insertinsurance", (req, res) => {
  var params = req.body;
  console.log(params);
  con.query(
    "insert into insurances set ?",
    params,
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.get("/viewinsurances", (req, res) => {
  const sqlGet =
    "select insuranceID, insurance_name, insurance_premium, insurance_age_limit from insurances order by insurance_name";
  con.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "delete from insurances where insuranceID = ?";
  con.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});
app.get("/getinsurance/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "select * from insurances where insuranceID = ?";

  con.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.get("/fetchinsurances", (req, res)=>{
  const sqlFetch = "select insurance_name from insurances order by insurance_name";
  con.query(sqlFetch, (error, result)=>{
    res.send(result)
  })
});

app.put("/editinsurance/:id", (req, res) => {
  const { id } = req.params;
  const { insurance_name, insurance_premium, insurance_age_limit } = req.body;

  const sqlUpdate =
    "update insurances set insurance_name = ?, insurance_premium = ?, insurance_age_limit = ? where insuranceID = ?";

  con.query(
    sqlUpdate,
    [insurance_name, insurance_premium, insurance_age_limit, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});
///

app.get("/viewemployees", (req, res) => {
  const sqlGet =
    "select employeeID, employee_name, employee_uname, employee_pswrd, insurance_name from employees";
  con.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/insertemployee", (req, res) => {
  var params = req.body;
  console.log(params);
  con.query(
    "insert into employees set ?",
    params,
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});
app.delete("/removeemp/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "delete from employees where employeeID = ?";
  con.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});
app.get("/getemployee/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "select * from employees where employeeID = ?";

  con.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/editemployee/:id", (req, res) => {
  const { id } = req.params;
  const { employee_name, employee_uname, employee_pswrd, insurance_name} = req.body;

  const sqlUpdate =
    "update employees set employee_name = ?, employee_uname = ?, employee_pswrd = ? ,insurance_name = ? where employeeID = ?";

  con.query(
    sqlUpdate,
    [employee_name, employee_uname, employee_pswrd, insurance_name, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});
app.listen(3001, () => {
  console.log("listening....");
});
