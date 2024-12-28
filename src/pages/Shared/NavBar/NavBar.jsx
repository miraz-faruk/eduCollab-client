const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">EduCollab</h1>
                <div className="flex space-x-6">
                    <a href="/" className="hover:text-blue-500">Home</a>
                    <a href="#features" className="hover:text-blue-500">Features</a>
                    <a href="#faq" className="hover:text-blue-500">FAQ</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;