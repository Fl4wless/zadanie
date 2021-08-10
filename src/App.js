import { useState } from "react";
import "./App.css";
import Row from "./Row";

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelectSeat = (seat, row, key) => {
    setSelectedSeats((prev) => [...prev, { key: key, row: row, seat: seat }]);
  };

  const handleRemoveSeat = (key, event) => {
    setSelectedSeats(selectedSeats.filter((item) => item.key !== key));
    console.log(selectedSeats);
    console.log(event);
  };

  const handleIsChecked = (e) => {
    e.target.checked = false;
  };

  const rows = Array.from({ length: 10 });

  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="container">
          {rows.map((row, index) => (
            <Row
              rowNumber={index + 1}
              selectSeat={handleSelectSeat}
              removeSeat={handleRemoveSeat}
              removeCheck={handleIsChecked}
            />
          ))}
        </div>
        <div className="picked-seats">
          <p>Vybrané miesta</p>
          <div className="miesta">
            {selectedSeats &&
              selectedSeats.map((seat) => (
                <p key={`${seat.seat}x${seat.row}`}>
                  {`Rad ${seat.row}, Sedadlo ${seat.seat}`}
                  <span
                    className="cancel"
                    onClick={(e) =>
                      handleRemoveSeat(`${seat.seat}x${seat.row}`)
                    }
                  >
                    (Zrušiť)
                  </span>
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
