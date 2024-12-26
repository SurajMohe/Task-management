import React from "react";

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      className="dropIndicator"
      data-before={beforeId || "-1"}
      data-column={column}
    ></div>
  );
};

export default DropIndicator;
