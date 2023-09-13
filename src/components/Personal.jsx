/* eslint-disable react/prop-types */
function Personal({
  handleChangeName,
  nameValue,
  handleChangeEmail,
  emailValue,
}) {
  return (
    <>
      <label htmlFor="name">name: </label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        value={nameValue}
        onChange={handleChangeName}
      />
      <label htmlFor="email">email:</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        value={emailValue}
        onChange={handleChangeEmail}
      />
    </>
  );
}

export { Personal };
