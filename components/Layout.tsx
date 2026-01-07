import { useRouter } from "next/router";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import { Inter, Manrope } from "next/font/google";
import NavbarNew from "./Navbar/NavbarNew";
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manropeFont = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
})

const Layout = ({ children }: any) => {
  const router = useRouter();
  // const toShowHeader = router.pathname === '/' ? false : true;
  // remove below line SG Demo
  const toShowHeader =
    router.pathname === "/" || router.pathname === "/hire" ? false : true;
  return (
    <>
      <div className={`main ${interFont.variable} ${manropeFont.variable} ${toShowHeader ? "layout-navbar-padding" : ""}`}>
        {/* <Navbar/> */}
        {/* remove below line SG Demo */}
        {toShowHeader ? <NavbarNew /> : null}
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
