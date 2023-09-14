/* eslint-disable react/prop-types */
export default function Education({
  school,
  handleChangeSchool,
  degree,
  handleChangeDegree,
  startingYear,
  handleChangeStartingYear,
  endingYear,
  handleChangeEndingYear,
  handleAddEducation,
}) {
  return (
    <div>
      <label htmlFor="school">School: </label>
      <input
        type="text"
        id="school"
        name="school"
        autoComplete="off"
        onChange={handleChangeSchool}
        value={school}
      />
      <label htmlFor="degree">Degree: </label>
      <input
        type="text"
        id="degree"
        name="degree"
        autoComplete="off"
        onChange={handleChangeDegree}
        value={degree}
      />
      <label htmlFor="starting">From year: </label>
      <input
        type="text"
        id="starting"
        name="starting"
        autoComplete="off"
        value={startingYear}
        onChange={handleChangeStartingYear}
      />
      <label htmlFor="ending">To: </label>
      <input
        type="text"
        id="ending"
        name="starting"
        autoComplete="off"
        value={endingYear}
        onChange={handleChangeEndingYear}
      />
      <button onClick={handleAddEducation}>Add education</button>
    </div>
  );
}
