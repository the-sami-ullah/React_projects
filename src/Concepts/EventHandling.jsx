import { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./Child_as_Prop/Card.module.css";

export default function EventHandling() {
  const [count, setcount] = useState(0);

  const handleINC = () => {
    setcount(count + 1);
  };

  const handleDEC = () => {
    setcount(count - 1);
  };
  return (
    <>
      <h1 className={style.heading} style={{ color: "black" }}>
        Increase Counter
      </h1>
      <h2
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        _______ {count} _______{" "}
      </h2>

      <sec
        classname={style.sec}
        style={{
          display: "flex", // Correct way to use flex
          justifyContent: "center", // Center vertically (fixed typo)
          alignItems: "center",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleINC} className={style.items} variant="light">
          +1
        </Button>
        <Button onClick={handleDEC} className={style.items} variant="dark">
          -1
        </Button>
        <Button
          onClick={() => {
            setcount(10 * count);
          }}
          className={style.items}
          variant="warning"
        >
          *10
        </Button>
        <Button
          onClick={() => {
            setcount(count / 10);
          }}
          className={style.items}
          variant="primary"
        >
          / 10
        </Button>
        <Button
          onClick={() => {
            setcount(count * 0);
          }}
          className={style.items}
          variant="primary"
        >
          Reset
        </Button>
      </sec>
    </>
  );
}
