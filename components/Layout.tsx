import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Layout = ({ children }: any) => {
  return (
    <>
      <div className="main">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  );
};
export default Layout;