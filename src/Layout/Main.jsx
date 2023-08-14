import { Outlet } from "react-router-dom"

import { Navbar } from "./Navbar"
import { LeftSideNav } from "./LeftSideNav"
import { useState } from "react"


export const Main = () => {


  const [istoggle, setIsToggled] = useState(true);

    const toggle = (value) => {
    setIsToggled(value);
    console.log(value)
  };

  return (
    <>

    <div className="Layout">

    <Navbar toggle={toggle} istoggle={istoggle}/>
    <div className="d-flex">
     <LeftSideNav toggle={istoggle} />
     <Outlet />
    </div>
   
  


    </div>
   
    
    </>
  )
}
