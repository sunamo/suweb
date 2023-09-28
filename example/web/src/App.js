import "./App.css";

//import { validateEmail } from "myutil";
import { useState } from "react";

function App() {
  const [valid, setValid] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Demo App</h1>
      </header>
      <main>
        <hr />
        <h3>Enter Email</h3>
        <input
          placeholder="enter email"
          onChange={(e) => {
            setValid(validateEmail(e.currentTarget.value));
          }}
        />
        {valid && <h3>Email is valid</h3>}
      </main>
    </div>
  );
}

export default App;