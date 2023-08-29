import React from "react";

const Button = ({ text, id }) => {
  return (
    <button className="ring-light-gray" id={id}>
      {text}
    </button>
  );
};

export default Button;
