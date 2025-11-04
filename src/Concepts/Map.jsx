export default function Map() {
  const names = ["Sami", "Hamid", "jaffer", "Ashgar", "Mudsir"];

  return (
    <>
      <ul>
        {names.map((curr, index) => (
          <li key={index}>
            {curr} and {index}
          </li>
        ))}
      </ul>
    </>
  );
}
