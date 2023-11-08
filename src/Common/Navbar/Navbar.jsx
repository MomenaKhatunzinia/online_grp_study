import { Link } from "react-router-dom";
import SignOut from "../../Authentication/SignOut/SignOut";


const Navbar = () => {
    const links = <>
    <li><Link to={"/register"}>Register</Link></li>
    <li><Link to={"/login"}>Login</Link></li>
    <li><Link to={"/create-assignment"}>Create Assignments</Link></li>
    <li><Link to={"/assignment"}>Assignments</Link></li>
    <li><Link to={"/my-assignment"}>My Assignments</Link></li>
    <li><Link to={"/Submittedassignment"}>Submitted Assignments</Link></li>
    
    </>
    return (
        <div className="py-11">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
   <div className="">
   <img
    className="btn btn-ghost normal-case text-xl rounded-full"
    src="https://i.ibb.co/Sx1mCkN/images.jpg" alt="Online Study" />
    <h1 className="text-xl font-extrabold">Online Study</h1>
   </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
   <SignOut></SignOut>
  </div>
</div>
        </div>
    );
};

export default Navbar;