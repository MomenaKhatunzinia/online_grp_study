import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignOut = () => {

    const {user,logOut} = useContext(AuthContext);
    const handleSignout = ()=>
    {
      logOut()
      .then()
      .catch()
    }
    return (
        <div className="">
            <div >
 {
      user? 
     <div className=" justify-end 
     gap-2 mb-6 " >
 
    <div className="group relative
    ">
    <img
 className="w-[24px] rounded-lg"
 src={user.photoURL} alt={user.displayName}></img>
 <div className="absolute flex justify-start items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-black text-2xl  inset-0">
    <h1 className="border rounded-xl shadow-lg bg-white">{user.displayName}</h1>
 </div>
    </div>

      <div className="">
      <button className="brn underline text-pink-700" onClick={handleSignout}>Logout</button>
      </div>

      </div>

      : 
  <div className="flex justify-end mb-6">
        <Link to={'/login'}>
     <button className="btn bg-sky-200 ">Login</button>
      </Link>
    </div>
    }

 </div>
        </div>
    );
};

export default SignOut;