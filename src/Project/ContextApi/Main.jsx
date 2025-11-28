import React, { createContext, useState } from "react";
import { ChildA } from "./Components/ChildA";
//Step:01 Creat Contextc
const UserContext = createContext();

//Step:02 wrap all the child inside Prvider to acces the data
//Step:03 pass value
//Step:04 Inside Consumer consume the value which are pass from the parent

export default function Main() {
  const [user, setuser] = useState({
    name: "love from my side",
    persons: "hamid jaffer Sami ullah",
  });
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export { UserContext };
