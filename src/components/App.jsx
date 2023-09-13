import { useState } from "react";
import { Personal } from "./Personal";
import Cv from "./Cv";
function App() {
  const [cvActive, setCvActive] = useState(false);
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [addressValue, setAddress] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <button onClick={() => setCvActive(!cvActive)}>
        {cvActive ? "hide preview" : "preview"}
      </button>
      <Personal
        handleChangeName={handleChangeName}
        nameValue={nameValue}
        handleChangeEmail={handleChangeEmail}
        emailValue={emailValue}
        handleChangeAddress={handleChangeAddress}
        addressValue={addressValue}
      />
      {cvActive && (
        <Cv name={nameValue} email={emailValue} address={addressValue}></Cv>
      )}
    </>
  );
}

export default App;
