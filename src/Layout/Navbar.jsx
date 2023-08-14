import './_Layout.scss'
import { FaStream } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export const Navbar = ({toggle, istoggle}) => {


  return (
    <>
    <div className="container-fluid navbar justify-content-between ">
    <span className='fs-5 fw-bolder d-flex align-items-center text-center justify-content-center ps-3 toggleDashbord' onClick={() => toggle(!istoggle)}> <FaStream className='mx-2 fs-5 '/> Dahsbord </span>
  
   <div className="d-flex">
     <div className=" short_nav  justify-content-between px-2">

  <form className="form-inline d-flex">
    <input className="form-control mr-sm-2 custom-placeholder" type="search" placeholder="Search" aria-label="Search"/>
   
  </form>
 
   <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>


    </div>
   </div>
    </div>


 
    
    
    </>
  )
}
