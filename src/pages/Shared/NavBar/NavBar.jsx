import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/Educollab-removebg-preview.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => {
                console.log(error);
            });
    }

    const navItems = <>
        <li><Link to="/assignments">Assignments</Link></li>
        {
            user?.email ? <>
                <li><Link to="/create-assignments">Create Assignments</Link></li>
                <li><Link to="/pending-assignments">Pending Assignments</Link></li>
            </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>
        }
    </>

    return (
        <div className="fixed top-0 left-0 w-full z-50 navbar bg-white shadow-lg px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <Link to="/"><button className="text-2xl font-bold hover:text-teal-400">EduCollab</button></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt="User Avatar" />
                                    ) : (
                                        <FaUserAlt className="w-full h-full text-gray-500" />
                                    )}
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to="/attempted-assignments" className="hover:bg-gray-100 p-2 rounded">My Attempted Assignments</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="hover:bg-gray-100 p-2 rounded">Log Out</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;