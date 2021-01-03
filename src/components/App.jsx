import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, SetTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    SetTime(newTime);
  }
  setInterval(updateTime);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Current Time</button>
    </div>
  );
}

export default App;
