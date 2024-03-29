import Footer from "./Footer";
import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between  min-h-screen">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 ">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
