import React from "react";
import "./Row.css";

const Row = (props) => {
  const seatsInRow = Array.from({ length: 20 });

  const handleClick = (event, key) => {
    if (event.target.checked === true) {
      const row = event.target.parentElement.getAttribute("cislo-rad");
      const seat = parseInt(event.target.id) + 1;
      props.selectSeat(seat, row, key);
    } else {
      props.removeSeat(event, key);
      event.target.checked = false;
    }
  };

  return (
    <React.Fragment>
      <div cislo-rad={props.rowNumber} className="row" key={props.rowNumber}>
        <p>Rad {props.rowNumber}</p>

        {seatsInRow.map((row, index) => {
          const uniqueId = `${parseInt(index) + 1}x${props.rowNumber}`;
          return (
            <input
              type="checkbox"
              id={index}
              onClick={(event) => handleClick(event, uniqueId)}
              key={uniqueId}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Row;
