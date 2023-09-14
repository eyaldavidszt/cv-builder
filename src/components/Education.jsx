/* eslint-disable react/prop-types */
export default function Education({
  school,
  handleChangeSchool,
  degree,
  handleChangeDegree,
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
      <button onClick={handleAddEducation}>Add education</button>
    </div>
  );
}
