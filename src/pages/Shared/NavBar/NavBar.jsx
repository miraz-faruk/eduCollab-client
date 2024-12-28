import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/Educollab-removebg-preview.png';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className='flex items-center space-x-3'>
                    <img className='w-12 h-12' src={logo} alt="" />
                    <Link to="/"><button className="text-2xl font-bold">EduCollab</button></Link>
                </div>
                <div className="flex space-x-6">
                    <Link to="/assignments"><a href="#features" className="hover:text-blue-500">Assignments</a></Link>
                    <Link to="/login"><a href="#faq" className="hover:text-blue-500">Login</a></Link>
                    <Link to="/register"><a href="#faq" className="hover:text-blue-500">Register</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;