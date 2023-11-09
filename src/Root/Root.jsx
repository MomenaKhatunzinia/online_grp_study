import { Link, Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import { AiFillHome} from 'react-icons/ai';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Link to={'/'}>
           <AiFillHome className="mb-4"></AiFillHome>
           </Link>
            <Outlet></Outlet>
           <div className="mt-11">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;