import { useRouter } from "next/router";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: any) => {
  const router = useRouter();
  // const toShowHeader = router.pathname === '/' ? false : true;
  // remove below line SG Demo
  const toShowHeader =
    router.pathname === "/" || router.pathname === "/hire" ? false : true;
  return (
    <>
      <div className="main">
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
