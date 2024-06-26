import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header flex items-center justify-between p-4">
            <NavLink to="/" className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-md">
                <p className="font-bold blue-gradient_text">RCP</p>
            </NavLink>
            <nav className="flex gap-4 text-lg font-medium">
                <NavLink
                    to="https://my-portfolio-blue-eight-67.vercel.app/"
                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}
                >
                    <span className="blue-gradient_text">My</span> Portfolio
                </NavLink>
                <NavLink
                    to="https://suranimala.vercel.app/"
                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}
                >
                    Research
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
