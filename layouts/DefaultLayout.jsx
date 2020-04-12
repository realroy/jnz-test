import { Footer, Navbar } from "../components";

export const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);
