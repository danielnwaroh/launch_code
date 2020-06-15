const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
var uniqid = require("uniqid");

const app = express();
const jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const SELECT_ALL_QUOTES_QUERY = "SELECT * FROM quotes";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Olgaland13.",
  database: "launchcode",
});

connection.connect((err) => {
  if (err) {
    return err;
  }
  console.log("Connected");
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from the quote server");
});

app.get("/quotes", (req, res) => {
  connection.query(SELECT_ALL_QUOTES_QUERY, (err, results) => {
    if (err) {
      console.log("something went wrong");
      return res.send(err);
    } else {
      return res.json({ data: results });
    }
  });
});

app.post("/quotes", jsonParser, function (req, res) {
  // create user in req.body
  console.log(req.body);
  res.send("It worked!");

  let CREATE_QUOTE_QUERY =
    "CALL create_quote(" +
    "'" +
    uniqid.time() +
    "'" +
    ", '" +
    req.body.from +
    "'" +
    ", '" +
    req.body.destination +
    "'" +
    ", '" +
    req.body.depart +
    "'" +
    ", '" +
    req.body.return +
    "'" +
    ", '" +
    req.body.people +
    "'" +
    ", '" +
    req.body.transportation +
    "'" +
    ", '" +
    req.body.name +
    "'" +
    ", '" +
    req.body.price +
    "')";
  connection.query(CREATE_QUOTE_QUERY, (err, results) => {
    if (err) {
      console.log("went wrong post");
      console.log(CREATE_QUOTE_QUERY);
      return res.send(err);
    } else {
      console.log("1 record inserted");
    }
  });
});

app.post("/deleteQuote", jsonParser, function (req, res) {
  console.log(req.body);
  let DELETE_QUOTE_QUERY = "CALL delete_quote(" + "'" + req.body.id + "')";
  connection.query(DELETE_QUOTE_QUERY, (err, results) => {
    if (err) {
      console.log("went wrong post");
      console.log(DELETE_QUOTE_QUERY);
      return res.send(err);
    } else {
      res.send("Deleted record");
      console.log("1 record deleted");
    }
  });
});

app.listen(4000, () => {
  console.log("Products server listening on port 4000");
});
