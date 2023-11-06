import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;