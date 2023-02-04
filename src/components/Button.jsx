import React from "react";

function Button({ label, style }) {
  return (
    <button className={`my-3 p-2 px-9 duration-300 rounded ${style}`}>
      {label}
    </button>
  );
}

export default Button;
