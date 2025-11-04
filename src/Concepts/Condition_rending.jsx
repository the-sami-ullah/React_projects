export default function Condition_rending() {
  const Admin = () => {
    return false;
  };

  return (
    <>{Admin() ? <h2>Wellcome to Dashboad</h2> : <h2>Please log in </h2>}</>
  );
}
