import { Footer } from "@/common/components/Footer";
import Header from "@/common/components/Header";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
