import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Layout = ({ children }: any) => {
  const router = useRouter();
  const toShowHeader = router.pathname === "/" ? false : true;
  return (
    <>
      <div className="main">
      {toShowHeader&&<Navbar />}
        {children}
        <Footer/>
      </div>
    </>
  );
};
export default Layout;