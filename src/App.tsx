import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button label="button" onClick={alert} />
    </>
  );
}

export default App;
