import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function MainLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
