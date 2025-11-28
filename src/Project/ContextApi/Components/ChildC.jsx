import React, { useContext } from "react";
import { UserContext } from "../Main";

const ChildC = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h2>
        {user.name} these are the persons{" "}
        <h1 style={{ color: "blue" }}>{user.persons}</h1>
      </h2>
    </>
  );
};

export default ChildC;
