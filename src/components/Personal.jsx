/* eslint-disable react/prop-types */
function Personal({ handleChange, nameValue }) {
  return (
    <>
      <label htmlFor="name">name: </label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        value={nameValue}
        onChange={handleChange}
      />
    </>
  );
}

export { Personal };
