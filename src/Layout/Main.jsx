import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"


export const Main = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
