/* eslint-disable react/prop-types */
export default function Cv({ name, email, address }) {
  return (
    <>
      <h1>name: {name}</h1>
      <h2>email: {email}</h2>
      <address>
        <h3>address: {address}</h3>
      </address>
    </>
  );
}
