import React, { useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import Addcard from "./Addcard";

const Column = ({ title, headingColor, column, cards, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const hadnleDragLeave = (e) => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    setActive(false);
    const cardId = e.dataTransfer.getData("cardId");
    let copy = [...cards];
    let cardToTransfer = copy.find((e) => e.id === cardId);
    if (!cardToTransfer) return;
    cardToTransfer = { ...cardToTransfer, column };
    copy = copy.filter((e) => e.id !== cardId);

    copy.push(cardToTransfer);

    setCards(copy);
  };

  const filteredCards = cards.filter((e) => e.column === column);

  return (
    <div className="column" style={{ color: `${headingColor}` }}>
      <div className="column-heading">
        <h3>{title}</h3>
        <span>{filteredCards.length} </span>
      </div>
      <div
        className="column-inner"
        style={{
          height: "95%",
          width: "100%",
          backgroundColor: `${active ? "grey" : "black"}`,
        }}
        onDragOver={handleDragOver}
        onDragLeave={hadnleDragLeave}
        onDrop={handleDragEnd}
      >
        {filteredCards.map((e,idx) => {
          return (
            <Card
              key={e.id}
              {...e}
              handleDragStart={handleDragStart}
              setCards={setCards}
              idx={idx}
            />
          );
        })}
        <DropIndicator beforeId={"-1"} column={column} />
        <Addcard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

export default Column;
