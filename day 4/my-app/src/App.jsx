import logo from "./logo.svg";
import "./style.css";
import "./App.css";
import { Heading1, Heading2 } from "./components/functionCom";
import HeadingClass from "./components/ClassCom";
function App() {
  let name = "Ridwan";
  let person = {
    name: "Ridwun",
    age: 17,
  };

  return (
    <div>
      <Heading1 {...person} />
      <Heading2 {...person} />

      <HeadingClass></HeadingClass>
      <h1 style={{ fontSize: "16px", color: "blue" }}>Hello World!</h1>
      <h2 className="red">
        My Name Is {name == "Jordan" ? name : "Bukan Jordan"}
      </h2>
    </div>
  );
}

export default App;
