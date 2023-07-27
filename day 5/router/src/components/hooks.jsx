import { useState } from "react";

const Example = () => {
  //   let number = 0;
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState(0);

  const increment = () => {
    setNumber(number + 1);
    // number++;
    console.log(number);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const changeInput = (e) => {
    const { value } = e.target;
    // console.log(Number(value));
    setInput(value);
    console.log(input);
  };

  const update = () => {
    if (isNaN(input)) return alert("bukan number");
    setNumber(Number(input));
  };

  const update2 = (angka) => setNumber(angka);

  return (
    <center>
      <div>
        <h1>{number.toLocaleString("id-ID")}</h1>
        <button onClick={decrement} style={{ marginRight: "25px" }}>
          <h2>decrement</h2>
        </button>
        <button onClick={increment}>
          <h2>increment</h2>
        </button>
      </div>
      <div>
        <input
          type="text"
          style={{ width: "250px", marginTop: "20px", fontSize: "20px" }}
          onChange={changeInput}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={update} style={{ marginRight: "25px" }}>
          <h2>update</h2>
        </button>
        <button onClick={() => update2(0)}>
          <h2>reset</h2>
        </button>
      </div>
    </center>
  );
};

export { Example };
