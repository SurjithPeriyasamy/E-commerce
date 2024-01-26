import React from "react";

const SuccessMessage = ({ styles, typeName }) => {
  return <div className={styles}>{typeName} Updated SuccessFully...</div>;
};

export default SuccessMessage;
