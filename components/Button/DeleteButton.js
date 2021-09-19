import React from "react";

export default function (props) {
  return (
    <button className="bg-red-600" onClick={props.onClick}>
      Delete
    </button>
  );
}
