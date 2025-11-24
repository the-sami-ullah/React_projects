import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./Cal.module.css";

const Cal = () => {
  const [data, setData] = useState("");

  const getValue = (event) => {
    let val = event.target.value;

    if (val === "AC") {
      setData("");
      return;
    }

    if (val === "Back") {
      setData(data.slice(0, -1));
      return;
    }

    setData(data + val);
  };

  const calculate = () => {
    try {
      setData(eval(data).toString());
    } catch {
      setData("Error");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Calculator</h1>

        <div className={styles.inp}>
          <input type="text" placeholder="0" value={data} readOnly />
        </div>

        <div className={styles.btnSection}>
          <Button className={styles.btn} onClick={getValue} value="(">
            (
          </Button>
          <Button className={styles.btn} onClick={getValue} value=")">
            )
          </Button>
          <Button className={styles.btn} onClick={getValue} value="%">
            %
          </Button>
          <Button className={styles.btn} onClick={getValue} value="AC">
            AC
          </Button>

          <Button className={styles.btn} onClick={getValue} value="7">
            7
          </Button>
          <Button className={styles.btn} onClick={getValue} value="8">
            8
          </Button>
          <Button className={styles.btn} onClick={getValue} value="9">
            9
          </Button>
          <Button className={styles.btn} onClick={getValue} value="*">
            *
          </Button>

          <Button className={styles.btn} onClick={getValue} value="4">
            4
          </Button>
          <Button className={styles.btn} onClick={getValue} value="5">
            5
          </Button>
          <Button className={styles.btn} onClick={getValue} value="6">
            6
          </Button>
          <Button className={styles.btn} onClick={getValue} value="-">
            -
          </Button>

          <Button className={styles.btn} onClick={getValue} value="1">
            1
          </Button>
          <Button className={styles.btn} onClick={getValue} value="2">
            2
          </Button>
          <Button className={styles.btn} onClick={getValue} value="3">
            3
          </Button>
          <Button className={styles.btn} onClick={getValue} value="+">
            +
          </Button>

          <Button className={styles.btn} onClick={getValue} value="0">
            0
          </Button>
          <Button className={styles.btn} onClick={getValue} value="Back">
            Back
          </Button>
          <Button className={styles.btn} onClick={calculate}>
            =
          </Button>
          <Button className={styles.btn} onClick={getValue} value="/">
            /
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cal;
