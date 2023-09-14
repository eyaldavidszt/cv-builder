/* eslint-disable react/prop-types */
export default function Cv({ name, email, address, educations }) {
  return (
    <div>
      <section>
        <h1>Personal</h1>
        <h2>name: {name}</h2>
        <h2>email: {email}</h2>
        <address>
          <h2>address: {address}</h2>
        </address>
      </section>
      <section>
        <h1>Education</h1>
        <ul>
          {educations.map((education) => {
            return <li key={education.id}>{education.school}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
