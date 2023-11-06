import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
    const {creatUser} = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    

    const handelRegister = e =>
    {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,image,password,email);

        setSuccess('')
        
    setError('')
  const capitalLetter = /[A-Z]/.test(password);
  
   const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
   if(!capitalLetter)
   {
 
    setError("No capital Letter");
    return
   }    
   else if(!specialChar)
   {
 
    setError("Special Char not found");
    return
   }  
   else if(!password.length >= 6)
   {
 
    setError("Length less then 6");
    return
   } 

        
        creatUser(email,password)
        .then(result =>
            {
                console.log(result.user)
                setSuccess('Sucessfull')
                swal("SuccessFully Registerd")
                updateProfile(result.user,{
                    photoURL:image,
                    displayName: name
                })
                .then (()=>
                {
                    console.log("profile updated")
                })
                .catch(error =>
                    {
                        console.log(error)
                    })
            })
            .catch(error =>
                {
                    console.log(error)
                })
    }
    return (
        <div>
            <div className="hero min-h-screen
            "
            >
  <div className="hero-content flex-col
  ">
    <div className="w-full mb-7  lg:text-left">
    <h1 className=" pb-11 text-5xl font-bold
    bg-gradient-to-r from-purple-700  to-yellow-200 text-transparent bg-clip-text
    ">Register Your Account</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handelRegister}
      className="card-body">
        
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" 
          name="name"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" placeholder="Image" 
          name="image"
          className="input input-bordered" required />
        </div>        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email"
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" 
          name="password"
          className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Rgister</button>
          <div className="text-center mt-4">
          <h1 className="text-red-700">{error}</h1>
          <h1 className="text-green-700">{success}</h1>
          </div>
          
        </div>
        
      </form>
     
    </div>
    <h1>Already Register <span className="text-violet-600 underline text-2xl"><Link to={'/login'}>Login</Link></span></h1>
  </div>
</div>
        </div>
    );
};

export default Register;