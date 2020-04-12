import { Footer, Navbar } from "../../components";

import styles from './DefaultLayout.module.css'

export const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);
