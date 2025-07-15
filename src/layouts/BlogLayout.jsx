import { Link, Outlet } from "react-router-dom";
import styles from './BlogLayout.module.css'

export default function BlogLayout() {
  return (
    <>
      <header className={styles.header}>
        <h2>Understand React with me</h2>
        <nav className={styles.margin}>
          <Link to="/" className={`${styles.marginRight} ${styles.color}`}>Home</Link>
          <Link to="/about" className={`${styles.marginRight} ${styles.color}`}>About</Link>
          <Link to="/blogs" className={`${styles.marginRight} ${styles.color}`}>Blogs</Link>
          <Link to="/contributers" className={styles.color}>Contributers</Link>
        </nav>
      </header>

      <main className={styles.paddingMain}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        &copy; 2025 My Blog
      </footer>
    </>
  );
}

