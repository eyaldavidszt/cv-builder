import { useState } from "react";
import { Personal } from "./Personal";
import Cv from "./Cv";
function App() {
  const [cvActive, setCvActive] = useState(false);
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <button onClick={() => setCvActive(!cvActive)}>Preview</button>
      <Personal
        handleChangeName={handleChangeName}
        nameValue={nameValue}
        handleChangeEmail={handleChangeEmail}
        emailValue={emailValue}
      />
      {cvActive && <Cv name={nameValue} email={emailValue}></Cv>}
    </>
  );
}

export default App;
