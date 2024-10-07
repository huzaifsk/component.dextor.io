import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <main className="flex flex-col">
        <div className="">
          <Navbar />
        </div>
        <div className="flex">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
