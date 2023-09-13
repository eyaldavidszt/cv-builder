import { useState } from "react";
import { Personal } from "./Personal";
import Cv from "./Cv";
function App() {
  const [cvActive, setCvActive] = useState(false);
  const [nameValue, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button onClick={() => setCvActive(!cvActive)}>Preview</button>
      <Personal handleChange={handleChange} nameValue={nameValue} />
      {cvActive && <Cv name={nameValue}></Cv>}
    </>
  );
}

export default App;
