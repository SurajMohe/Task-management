import React, { useEffect, useState } from "react";
import Column from "./Column";
import BurnDarry from "./BurnDarry";

const Board = () => {

  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    const cardData = localStorage.getItem("cards");
    setCards(cardData ? JSON.parse(cardData) : []);
    setHasChecked(true);
  }, []);

  return (
    <div className="board">
      <Column
        title={"Backlog"}
        column={"backlog"}
        headingColor={"red"}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title={"TODO"}
        column={"todo"}
        headingColor={"blue"}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title={"In progress"}
        column={"doing"}
        headingColor={"yellow"}
        cards={cards}
        setCards={setCards}
      />
      <Column
        title={"Complete"}
        column={"done"}
        headingColor={"lightgreen"}
        cards={cards}
        setCards={setCards}
      />
      <BurnDarry setCards={setCards} />
    </div>
  );
};

export default Board;
