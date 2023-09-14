/* eslint-disable react/prop-types */
export default function Education({
  school,
  handleChangeSchool,
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
      <button onClick={handleAddEducation}>Add education</button>
    </div>
  );
}
