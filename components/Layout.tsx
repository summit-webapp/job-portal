import { useRouter } from "next/router";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import { Inter } from "next/font/google";
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({ children }: any) => {
  const router = useRouter();
  // const toShowHeader = router.pathname === '/' ? false : true;
  // remove below line SG Demo
  const toShowHeader =
    router.pathname === "/" || router.pathname === "/hire" ? false : true;
  return (
    <>
      <div className={`main ${interFont.variable}`}>
        {/* <Navbar/> */}
        {/* remove below line SG Demo */}
        {toShowHeader ? <Navbar /> : null}
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
