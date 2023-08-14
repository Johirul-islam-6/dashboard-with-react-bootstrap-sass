import { FaWarehouse,FaSignal,FaStar, FaStickyNote, FaRegEnvelope, FaRegSun } from 'react-icons/fa'
import './_Layout.scss'

// eslint-disable-next-line react/prop-types
export const LeftSideNav = ({toggle}) => {

  return (
    <>
       {
     toggle && <>
      
      <div className=" leftside_Nav pt-3 pe-4">

   <ul className='d-flex-column  justify-content-center   border-none  '>
    <div className="div">

 {/* ========dropdown list ======== */}
<div className="dropdown flex justify-content-center align-items-center ">

  <span className="d-flex justify-content-between align-items-center roboto dashbord-text" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <span className='pe-5 text-uppercase'><FaWarehouse className='me-2 mb-1'/>  Dashbord</span> <span className='dropdown-toggle'></span>
  </span>
  
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    <li><a className="dropdown-item text-start " href="#">All User</a></li>
    <li><a className="dropdown-item text-start my-2" href="#">New User</a></li>
    <li><a className="dropdown-item text-start" href="#">All Admin</a></li>
  </div>
</div>
</div>
 {/* ========dropdown list ======== */}
<div className="dropdown flex justify-content-center align-items-center pt-4">

  <span className="d-flex justify-content-between align-items-center roboto dashbord-text " data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
    <span className='pe-5 text-uppercase'><FaSignal className='me-2 mb-1'/>  Chart</span> <span className='dropdown-toggle'></span>
  </span>
  
<div className="collapse" id="collapseExample2">
  <div className="card card-body">
    <li><a className="dropdown-item text-start " href="#">All User</a></li>
    <li><a className="dropdown-item text-start my-2" href="#">New User</a></li>
    <li><a className="dropdown-item text-start" href="#">All Admin</a></li>
  </div>
</div>
</div>

 {/* ========dropdown list ======== */}
<div className="dropdown flex justify-content-center align-items-center pt-4">

  <span className="d-flex justify-content-between align-items-center roboto dashbord-text " data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
    <span className='pe-5 text-uppercase'><FaStar className='me-2 mb-1'/>  Apps</span> <span className='dropdown-toggle'></span>
  </span>
  
<div className="collapse" id="collapseExample3">
  <div className="card card-body">
    <li><a className="dropdown-item text-start " href="#">All User</a></li>
    <li><a className="dropdown-item text-start my-2" href="#">New User</a></li>
    <li><a className="dropdown-item text-start" href="#">All Admin</a></li>
  </div>
</div>
</div>
 {/* ========dropdown list ======== */}
<div className="dropdown flex justify-content-center align-items-center pt-4">

  <span className="d-flex justify-content-between align-items-center roboto dashbord-text " data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
    <span className='pe-5 text-uppercase'><FaStickyNote className='me-2 mb-1'/>  Forem</span> <span className='dropdown-toggle'></span>
  </span>
  
<div className="collapse" id="collapseExample4">
  <div className="card card-body">
    <li><a className="dropdown-item text-start " href="#">All User</a></li>
    <li><a className="dropdown-item text-start my-2" href="#">New User</a></li>
    <li><a className="dropdown-item text-start" href="#">All Admin</a></li>
  </div>
</div>
</div>
 {/* ========dropdown list ======== */}
<div className="dropdown flex justify-content-center align-items-center pt-4">

  <span className="d-flex justify-content-between align-items-center roboto dashbord-text " data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
    <span className='pe-5 text-uppercase'><FaRegEnvelope className='me-2 mb-1'/>  Email</span> <span className='dropdown-toggle'></span>
  </span>
  
<div className="collapse" id="collapseExample5">
  <div className="card card-body">
    <li><a className="dropdown-item text-start " href="#">All User</a></li>
    <li><a className="dropdown-item text-start my-2" href="#">New User</a></li>
    <li><a className="dropdown-item text-start" href="#">All Admin</a></li>
  </div>
</div>
</div>
 {/* ========dropdown list ======== */}
<div className="dropdown flex justify-content-center align-items-center pt-4">

  <span className="d-flex justify-content-between align-items-center roboto dashbord-text " data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">
    <span className='pe-5 text-uppercase'><FaRegSun className='me-2 mb-1'/>  SETTING</span> <span className='dropdown-toggle'></span>
  </span>
  
<div className="collapse" id="collapseExample6">
  <div className="card card-body">
    <li><a className="dropdown-item text-start " href="#">All User</a></li>
    <li><a className="dropdown-item text-start my-2" href="#">New User</a></li>
    <li><a className="dropdown-item text-start" href="#">All Admin</a></li>
  </div>
</div>
</div>




    </div>

       </ul>

    </div>
     
      </>
    }
    
    </>
 
    
  )
}
