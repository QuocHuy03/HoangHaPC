import React from "react";
import HeaderTop from "../HeaderTop";
import HeaderBottom from "../HeaderBottom";

export default function Header() {
  return (
    <div className="global-header-container bg-blue">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}
