import React from "react";
import DropIndicator from "./DropIndicator";
import { MdDelete } from "react-icons/md";

const Card = ({ title, id, column, handleDragStart, setCards, idx }) => {
  const delethandler = (e) => {
    setCards((pv) => pv.filter((e) => e.id !== id));
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        className="Card"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
      >
        <h4> {title} </h4>
        <button className="deletbtn" onClick={delethandler}>
            <MdDelete/>
        </button>
      </div>
    </>
  );
};

export default Card;
