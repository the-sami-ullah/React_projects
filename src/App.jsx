import Props from "./Concepts/Props";

export default function App() {
  const names = ["Sami", "Ali", "Ahamad", "Hamid"];
  return (
    <ul>
      {names.map((curr, index) => (
        <Props key={index} name={curr} />
      ))}
    </ul>
  );
}
