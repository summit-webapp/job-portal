import { useRouter } from "next/router";


const Layout = ({ children }: any) => {
  return (
    <>
      <div className="main">
        {children}
      </div>
    </>
  );
};
export default Layout;