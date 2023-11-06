import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { Link } from "react-router-dom";


const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    const {googleSignIn, SignIn} = useContext(AuthContext)
    const handelLogin = e =>
    {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email);
        setSuccess('')
        setError('')
       
      SignIn(email,password)
     
      .then(result =>
         { console.log(result.user);
          setSuccess('Successfully')
            swal("login suscessful")
        }
          )
          .catch(error =>
              {console.log(error);
              setError(error.message)
             swal("login information incorrect")})
    }
    const handelGoogle = () =>
  {
    googleSignIn()
    .then(result =>
      { 
        console.log(result.user);
        setSuccess('Successfully')
        swal("login suscessful")
        
       
      }
       )
       .catch(error =>
           console.log(error))

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
    ">Login To Account</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
      onSubmit={handelLogin}
      className="card-body">
        
     
             

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
          <button className="btn btn-primary">Login</button>
         

          <div className="text-center mt-4">
          <h1 className="text-red-700">{error}</h1>
          <h1 className="text-green-700">{success}</h1>
          </div>
          
        </div>
        
      </form>
     
    </div>
    <div className="flex justify-center items-center">
    <h1>You can Login With</h1>
    <button onClick={handelGoogle} className="btn btn-link">Google</button>

    </div>
    <h1>Not Register ! <span className="text-violet-600 underline text-2xl"><Link to={'/register'}>Register</Link></span></h1>
  </div>
</div>
            
        </div>
    );
};

export default Login;