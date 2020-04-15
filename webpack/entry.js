import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table.jsx";

const wishlistTable = document.getElementById("#wishlistTable");
if (wishlistTable) {
  ReactDOM.render(<Table variant="wishlistTable" />, wishlistTable);
}
const staffTable = document.getElementById("#staffTable");
if (staffTable) {
  ReactDOM.render(<Table variant="staffTable" />, staffTable);
}
