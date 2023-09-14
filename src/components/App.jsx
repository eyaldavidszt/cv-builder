import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Personal } from "./Personal";
import Education from "./Education";
import Cv from "./Cv";
import { Fragment } from "react";
import "../styles/app.css";
function App() {
  const [cvActive, setCvActive] = useState(false);
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [addressValue, setAddress] = useState("");

  const [educations, setEducations] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");

  const [startingYear, setStartingYear] = useState("");
  const [endingYear, setEndingYear] = useState("");

  // we are changing educations on "add education" button click
  // handleAddEducation = make new education array and pass it into setEducations...
  // but how do we append the new Education object? how do we get the inputs data?
  // maybe it's from the parent like the personal section.

  const handleChangeStartingYear = (e) => {
    setStartingYear(e.target.value);
  };
  const handleChangeEndingYear = (e) => {
    setEndingYear(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleAddEducation = () => {
    const array = [...educations];
    const toAppend = {};
    console.log(school);
    toAppend["school"] = school;
    toAppend["degree"] = degree;
    toAppend["starting"] = startingYear;
    toAppend["ending"] = endingYear;
    toAppend["id"] = uuidv4();
    array.push(toAppend);
    setEducations(array);
  };
  const handleRemoveEducation = (e) => {
    const prevArray = [...educations];
    const array = prevArray.filter((education) => education.id !== e.target.id);
    setEducations(array);
  };
  const handleChangeSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleChangeDegree = (e) => {
    setDegree(e.target.value);
  };

  return (
    <>
      <button onClick={() => setCvActive(!cvActive)}>
        {cvActive ? "hide preview" : "preview"}
      </button>
      {!cvActive && (
        <Fragment>
          <Personal
            handleChangeName={handleChangeName}
            nameValue={nameValue}
            handleChangeEmail={handleChangeEmail}
            emailValue={emailValue}
            handleChangeAddress={handleChangeAddress}
            addressValue={addressValue}
          />
          <Education
            school={school}
            degree={degree}
            startingYear={startingYear}
            endingYear={endingYear}
            handleChangeEndingYear={handleChangeEndingYear}
            handleChangeStartingYear={handleChangeStartingYear}
            handleChangeSchool={handleChangeSchool}
            handleChangeDegree={handleChangeDegree}
            handleAddEducation={handleAddEducation}
          />
        </Fragment>
      )}
      {cvActive && (
        <Cv
          name={nameValue}
          email={emailValue}
          address={addressValue}
          educations={educations}
          handleRemoveEducation={handleRemoveEducation}
        />
      )}
    </>
  );
}

export default App;
