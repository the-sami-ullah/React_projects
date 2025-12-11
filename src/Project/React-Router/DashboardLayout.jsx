
import { Link, Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";

export default function DashboardLayout() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>🛠️ Dashboard</h2>

      <nav className={styles.nav}>
        <Link className={styles.navLink} to="home">Home</Link>
        <Link className={styles.navLink} to="settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}


