import React, { useState } from "react";
import "./App.css";

function App() {
  //used hook
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Counter State App</h1>
      </header>
      <h2>Counter App starting from {count}</h2>
      <button onClick={() => setCount(0)}>Reset counter</button>
      {/* used ternary operator */}
      <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>
        Increase Counter
      </button>
      <button onClick={() => (count < 1 ? "" : setCount(count - 1))}>
        {" "}
        Decrease Counter
      </button>
    </div>
  );
}

export default App;
