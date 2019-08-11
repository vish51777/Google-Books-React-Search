import React from "react";
import "./style.css";

function Unsave(props) {
  return <button className="unsave-btn btn-danger" onClick={() => props.deleteSaved(props)}>Unsave</button>
};

export default Unsave;
