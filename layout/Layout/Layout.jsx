import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="layout">
      <Header sticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
