import "./index.css";
import { useState } from "react";

const options = [
  { points: 0, text: "Dissatisfied(0%)" },
  { points: 5, text: "It was okay(5%)" },
  { points: 10, text: "It was good(10%)" },
  { points: 20, text: "Absolutely amazing !(20%)" },
];

export default function App() {
  const [rating, setRating] = useState("");
  const [friendRating, setFriendRating] = useState("");
  const [bill, setBill] = useState("");

  function handleClearList() {
    setRating("");
    setFriendRating("");
    setBill("");
  }
  return (
    <div className="App">
      <InputBill bill={bill} onSetBill={setBill} />
      <ServiceRating rating={rating} onSetRating={setRating}>
        How did you like the service ?
      </ServiceRating>
      <ServiceRating rating={friendRating} onSetRating={setFriendRating}>
        How did your friend like the service ?
      </ServiceRating>
      <Output
        bill={bill}
        rating={rating}
        friendRating={friendRating}
        onClearList={handleClearList}
      />
    </div>
  );
}

function InputBill({ bill, onSetBill }) {
  return (
    <div className="inputBill">
      <form>
        <label for="bill">How much was the bill ?</label>
        <input
          placeholder="bill value"
          value={bill}
          type="text"
          id="bill"
          onChange={(e) =>
            isNaN(e.target.value) || e.target.value < 0
              ? ""
              : onSetBill(Number(e.target.value))
          }
        />
      </form>
    </div>
  );
}

function ServiceRating({ rating, onSetRating, children }) {
  return (
    <div>
      <label> {children} </label>
      <select
        value={rating}
        onChange={(e) => onSetRating(Number(e.target.value))}
      >
        {options.map((item, idx) => (
          <option value={item.points} key={item.points}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}

function Output({ bill, rating, friendRating, onClearList }) {
  const tips = (rating + friendRating) / 2;

  return (
    <div>
      {bill && (
        <>
          <h3>
            You pay 💲 {bill + tips} (💲{bill} + 💲 {tips})
          </h3>
          <br />
          <button onClick={onClearList}>Reset</button>
        </>
      )}
    </div>
  );
}
