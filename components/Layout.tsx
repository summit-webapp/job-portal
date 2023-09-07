import { useRouter } from "next/router";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


const Layout = ({ children }: any) => {
  const router = useRouter();
  const toShowHeader = router.pathname === "/" ? false : true;
  return (
    <>
      <div className="main">
      {/* {toShowHeader&&<Navbar />} */}
      <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  );
};
export default Layout;