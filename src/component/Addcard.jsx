import React, { useState } from "react";
import { FcCancel } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { TbFlagCancel } from "react-icons/tb";

const Addcard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };
    setCards((pv) => [...pv, newCard]);
    setAdding(false);
  };

  return (
    <div>
      {adding ? (
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            style={{ width: "100%" }}
          />
          <div className="btn">
          <button onClick={() => setAdding(false)}>
             Cancle <MdCancel/>
          </button>
          <button>Add +</button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => {
            setAdding(true);
          }}
        >
          Add Cards
        </button>
      )}
    </div>
  );
};

export default Addcard;
