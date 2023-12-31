import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-12 h-12 rounded-lg bg-white items-center justify-center flex shadow-md">
                <p className="font-bold blue-gradient_text">RCP</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="http://rcprajapaksha.s3-website-us-east-1.amazonaws.com/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    <span className="blue-gradient_text">My</span> Portfolio
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
};

export default Navbar;