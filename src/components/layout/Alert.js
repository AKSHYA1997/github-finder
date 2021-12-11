import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <p>{alert.message}</p>
      </div>
    )
  );
};

export default Alert;
