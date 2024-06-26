import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import ThemeSwitcher from "../components/ThemeSwitcher"
import MobileNavigation from "../components/MobileNavigation"

const Layout = () => {
  return (
    <div className="font-Poppins">
      <ThemeSwitcher />
      <Navigation />
      <MobileNavigation />
      <Outlet />
    </div>
  )
}

export default Layout
