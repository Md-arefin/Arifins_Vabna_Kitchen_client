/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import img from "../../../assets/restuarent/logo.png";


const Navbar = () => {

    const navItems = <>
        <li className="hover:bg-[#ad1a19] rounded border border-white hover:border-black hover:text-black mx-2">
            <Link>Home</Link>
        </li>

        <li className="hover:bg-[#ad1a19] rounded border border-white hover:border-black hover:text-black mx-2">
            <Link>Menu</Link>
        </li>

        <li className="hover:bg-[#ad1a19] rounded border border-white hover:border-black hover:text-black mx-2">
            <Link>Reservation</Link>
        </li>

        <li className="hover:bg-[#ad1a19] rounded border border-white hover:border-black hover:text-black mx-2">
            <Link>About Us</Link>
        </li>

        <li className="hover:bg-[#ad1a19] rounded border border-white hover:border-black hover:text-black mx-2">
            <Link>Blog</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl flex items-center">
                        <div>
                            <img className="w-10" src={img} alt="" />
                        </div>
                        <p>AV Kitchen</p></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <Link to='/login' className="btn hover:bg-[#ad1a19] rounded border border-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;