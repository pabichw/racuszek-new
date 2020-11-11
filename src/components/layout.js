import React from "react"
import Menu from "./menu"

import "../assets/style.css"
import TopBar from "./TopBar"

const Layout = ({ children }) => (
  <div>
    <TopBar/>
    <Menu />
    <div>{children}</div>
  </div>
)

export default Layout
