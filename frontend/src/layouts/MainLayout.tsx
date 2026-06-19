import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

function MainLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
