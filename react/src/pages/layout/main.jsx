import Header from "./components/header"
import Sidebar from "./components/sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="w-screen">
            <Header/>
            <Sidebar/>
            <Outlet />
        </div>
    )
}
