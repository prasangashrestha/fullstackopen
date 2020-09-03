import React from "react";

const Alert = ({message, setMessage}) => {
  const delay = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };
  return (
    message && (
      <div>
        <p>{message}</p>
        {delay()}
      </div>
    )
  );
};

export default Alert;
