import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="my-16 bg-base-200">
            <div className="py-5 max-h-screen px-24">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-blue-600 font-bold">Register now!</h1>
                        <p className="py-6 pr-24">Welcome to <span className="text-teal-500 font-bold">EduCollab</span>!!! Create your account for collaboration. If you do not have an account yet, you can register for free.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-9">
                        <form onSubmit={handleSignUp} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-teal-400">Register</button>
                            </div>
                            <div className="flex justify-center gap-4 pt-5">
                                <button className="bg-[#F5F5F8] rounded-full w-12 h-12 p-3 text-2xl"><FcGoogle /></button>
                                <button className="bg-[#F5F5F8] rounded-full w-12 h-12 p-3 text-2xl text-[#3B5998]"><FaFacebookF /></button>
                                <button className="bg-[#F5F5F8] rounded-full w-12 h-12 p-3 text-2xl text-[#0A66C2]"><FaLinkedinIn /></button>
                            </div>
                        </form>
                        <div className="pt-2">
                            <p className="text-center">Already have an account? <Link to="/login"><a href="/register" className="link link-hover text-blue-600">Login here</a></Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;