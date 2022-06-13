import * as React from "react";
import LayoutProps from "../types/layoutprops";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout;