import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <div className="max-w-full h-full mt-10">
            <img
            className="w-full flex justify-center items-center"
            src="https://i.ibb.co/0FshBHZ/images.png" alt="" />
           <div className="flex justify-center items-center mt-11 ">
            <Link to={'/'}>
            <button className="btn-primary rounded-md  p-7">Go Home</button>
            </Link>
           </div>
        </div>
    );
};

export default ErrorPage;