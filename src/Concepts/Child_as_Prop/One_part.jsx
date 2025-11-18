import style from "./Card.module.css";

export default function One_part() {
  return (
    <>
      <section className={style.sec}>
        <h2 className={style.heading}>List of Vegetable</h2>
        <ul className={style.item}>
          <li className={style.items}>Patato</li>
          <li className={style.items}>Vinger</li>
          <li className={style.items}>Onion</li>
          <li className={style.items}>Green Chili</li>
        </ul>
      </section>
    </>
  );
}
