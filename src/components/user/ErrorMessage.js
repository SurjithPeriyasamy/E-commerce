import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <h4 className="text-red-600 text-sm font-bold tracking-wider text-left">
      {error}
    </h4>
  );
};

export default ErrorMessage;
