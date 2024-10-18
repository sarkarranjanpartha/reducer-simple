import React from "react";
import Counter from "./Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Counter App with useReducer</h1>
      <Counter />
    </div>
  );
};

export default App;
