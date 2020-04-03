import React from "react"
import "../styles/style.scss"

import SidebarNav from "../components/sidebar-nav"

export default ({children}) =>( 
    <div className="main">
        <SidebarNav />
        {children}
    </div>
)
