import "./styles.css";
import SpeechToText from "./SpeechToText";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Child from "./Child";
import { useState } from "react";
export default function App() {
  const [trans, setTrans] = useState("");
  const [text, setText] = useState("");
  function getdata(trans, text) {
    console.log(trans);
    setText(text);
    setTrans(trans);
  }
  return (
    <div className="App">
      <h1>Speech To Text</h1>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<SpeechToText getdata={getdata} />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<Child transcript={trans} message={text} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
