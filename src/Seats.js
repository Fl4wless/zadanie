import React from "react";
import Row from "./Row";
import "./App.css";

const Seats = ({ handlePickedSeats, uidOfCheckboxToDelete }) => {
  const seatRows = Array.from({ length: 10 });

  return (
    <div className="seats">
      {seatRows.map((row, index) => {
        return (
          <Row
            uidOfCheckboxToDelete={uidOfCheckboxToDelete}
            rowIndex={index}
            key={index}
            handlePickedSeats={handlePickedSeats}
          />
        );
      })}
    </div>
  );
};

export default Seats;
