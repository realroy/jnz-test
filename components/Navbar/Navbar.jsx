import NextLink from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <header>
    <nav className={styles.container}>
      <div className={styles["brand-logo"]}>LOGO</div>
      <NextLink href="/">
        <a className={styles["brand-text"]}>website</a>
      </NextLink>
      <div className={styles["search-container"]}>
        <form>
          <label htmlFor="search">Search</label>
          <div className={styles["search__input-container"]}>
            <input
              className={styles["search__input"]}
              id="search"
              type="text"
              placeholder="Search"
            />
            <span className={styles["search__icon"]} type="submit">
              &#8981;
            </span>
          </div>
        </form>
      </div>
    </nav>
  </header>
);
