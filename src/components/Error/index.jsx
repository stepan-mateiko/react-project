import React from "react";
import propTypes from "prop-types";

const Error = ({ errormessage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 50,
        fontSize: 36,
        color: "white",
      }}
    >
      <p> {errormessage}</p>
    </div>
  );
};

export default Error;

Error.propTypes = {
  errormessage: propTypes.string,
};
