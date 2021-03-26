import React from "react";
import "./style.css";

function Button(props) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;

  return (
    <div className="btn-container">
      <button
        className="btn"
        disabled={disabled || loading}
        {...remainingProps}
      >
        {loading ? "Loading..." : children}
      </button>
    </div>
  );
}
export default Button;
