import { useState } from "react";

const Row = ({ rowIndex, handlePickedSeats, uidOfCheckboxToDelete }) => {
  const seatsInRow = Array.from({ length: 20 });

  const handleSeatPick = (e, uid) => {
    handlePickedSeats(e, uid);
  };

  return (
    <div className="row">
      {seatsInRow.map((seat, index) => {
        const uid = `${rowIndex + 1}x${index + 1}`;
        let checked;
        if (uid === uidOfCheckboxToDelete) {
          checked = false;
        }
        return (
          <input
            name={uid}
            type="checkbox"
            key={uid}
            row={rowIndex + 1}
            seat={index + 1}
            onClick={(e) => {
              handleSeatPick(e, uid);
            }}
            checked={checked}
          />
        );
      })}
    </div>
  );
};

export default Row;
