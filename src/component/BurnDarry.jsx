import React, { useState } from "react";

const BurnDarry = ({ setCards }) => {
  const [active, setActive] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const hadnleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    setCards((pv) => pv.filter((e) => e.id !== cardId));
    setActive(false);
  };
  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={hadnleDragLeave}
      className="burnDarry deletbox"
      style={{
        border: `${active ? "5px solid yellow" : "5px solid grey"}`,
        backgroundColor: `${active ? "red" : "grey"}`,
      }}
    >
        Drag an Delete
    </div>
  );
};

export default BurnDarry;
