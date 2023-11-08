import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <div className="mt-11">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;