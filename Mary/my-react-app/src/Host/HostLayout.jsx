import React from "react";
import HostNavBar from "./HostNavBar";
import { Outlet } from "react-router-dom";
export default function HostLayout() {
  return (
    <div style={{ border: "2px solid red", height: "100%" }}>
      <HostNavBar></HostNavBar>
      {/*This is the place where we render the HostNavBar.*/}
      <div
        id="hostOutletdiv"
        style={{ border: "2px solid blue", minHeight: "65vh" }}
        className="text-white"
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
}
