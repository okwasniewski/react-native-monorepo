import React from "react";
import "./App.css";
import { add } from "@example-app/shared";

function App() {
  return (
    <div>
      <button onClick={() => console.log(add(1, 2))}>Run add function</button>
    </div>
  );
}

export default App;
