import NextLink from "next/link";
import styles from "./Navbar.module.css";
import { SearchForm } from "../SearchForm";

export const Navbar = () => (
  <header>
    <nav className={styles.container}>
      <div className={styles["brand-logo"]}>LOGO</div>
      <NextLink href="/">
        <a className={styles["brand-text"]}>website</a>
      </NextLink>
      <div className={styles["search-container"]}>
        <SearchForm />
      </div>
    </nav>
  </header>
);
