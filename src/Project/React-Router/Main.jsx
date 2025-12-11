// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import DashboardLayout from "./DashboardLayout";
import DashboardHome from "./DashboardHome";
import DashboardSettings from "./DashboardSettings";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📘 Fake Blog App</h1>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/about">About</Link>
        <Link className={styles.navLink} to="/blog">Blog</Link>
        <Link className={styles.navLink} to="/dashboard/home">Dashboard</Link>
      </nav>

      <hr />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Nested Routes under /dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

