import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const SpeechToText = () => {
  const commands = [
    {
      command: "state definition",
      callback: () =>
        setData(
          `The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.`
        )
    },
    {
      command: "class and functional difference",
      callback: () =>
        setData(
          `A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
        A class component requires you to extend from React. Component and create a render function that returns a React element.
        Functional component run from top to bottom and once the function is returned it can’t be kept alive.
        The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class component.     
      
      `
        )
    },
    {
      command: "features of react",
      callback: () =>
        setData(
          `1. JSX:  JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
        2. Components: Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately. 
        3. Virtual DOM: React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.
        4. One-way data-binding: React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.
        5. High performance: React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.
        `
        )
    }
  ];
  const {
    listening,
    browserSupportsContinuousListening
  } = useSpeechRecognition();
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  const [text, setText] = useState("");
  const [data, setData] = useState("");
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  // if (browserSupportsContinuousListening) {
  //   SpeechRecognition.startListening({ continuous: true,language: 'en-IN' })
  // }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        style={{
          padding: "10px 30px",
          borderRadius: "10px",
          margin: "10px",
          border: "none",
          background: "green",
          color: "#fff"
        }}
        onClick={() =>
          SpeechRecognition.startListening({
            continuous: true,
            language: "en-IN"
          })
        }
      >
        Start
      </button>
      <button
        onClick={SpeechRecognition.stopListening}
        style={{
          padding: "10px 30px",
          borderRadius: "10px",
          margin: "10px",
          border: "none",
          background: "red",
          color: "#fff"
        }}
      >
        Stop
      </button>
      <button
        onClick={resetTranscript}
        style={{
          padding: "10px 30px",
          borderRadius: "10px",
          margin: "10px",
          border: "none",
          background: "yellow",
          color: "#000"
        }}
      >
        Reset
      </button>
      <br />

      <p>{transcript}</p>

      <p>{data}</p>
      <div style={{ position: "absolute", bottom: "10%", left: "10%" }}>
        <textarea
          rows="8"
          cols="100"
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button
            style={{
              padding: "10px 30px",
              borderRadius: "10px",
              margin: "10px",
              border: "none",
              background: "lightgreen",
              color: "#000"
            }}
            onClick={() => setData(text)}
          >
            Add
          </button>
          <button
            style={{
              padding: "10px 30px",
              borderRadius: "10px",
              margin: "10px",
              border: "none",
              background: "red",
              color: "#fff"
            }}
            onClick={() => setData("")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default SpeechToText;
