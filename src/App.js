import { useState } from "react";
import "./App.css";
import Seats from "./Seats";

function App() {
  const [seatsNumber, setSeatsNumber] = useState(0);
  const [pickedSeats, setPickedSeats] = useState([]);
  const [uidOfCheckboxToDelete, setUidOfCheckboxToDelete] = useState();

  const handlePickedSeats = (e, uid) => {
    if (e.target.checked) {
      const row = e.target.getAttribute("row");
      const seat = e.target.getAttribute("seat");
      setPickedSeats((prev) => [
        ...prev,
        { key: uid, row: row, seat: parseInt(seat) + 1 },
      ]);
      setSeatsNumber((prev) => prev + 1);
    } else {
      setPickedSeats(pickedSeats.filter((seat) => seat.key !== uid));
      setSeatsNumber((prev) => prev - 1);
    }
  };

  const handleDeleteReservation = (e, row, seat) => {
    const id = `${row}x${seat - 1}`;
    setUidOfCheckboxToDelete(id);
    setPickedSeats(pickedSeats.filter((seat) => seat.key !== id));
    setSeatsNumber((prev) => prev - 1);
  };

  return (
    <div className="app">
      <div className="container">
        <Seats
          handlePickedSeats={handlePickedSeats}
          uidOfCheckboxToDelete={uidOfCheckboxToDelete}
        />
        <div className="rezervacia">
          <h3>Vybrané miesta</h3>
          {pickedSeats &&
            pickedSeats.map(({ row, seat }) => {
              return (
                <p key={Math.random() * 100}>
                  {`Rad ${row}, Miesto ${seat - 1}`}
                  <span onClick={(e) => handleDeleteReservation(e, row, seat)}>
                    delete
                  </span>
                </p>
              );
            })}
        </div>
      </div>
      <p>Počet vybratých miest: {seatsNumber}</p>
    </div>
  );
}

export default App;
