import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import GoogleImg from "../../../assets/google.png";
import loginImg from "../../../assets/Login-amico.png";



const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        setError("");
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                const savedUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                }
                // save user in the DB

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    };

    const handleGoogle = () => {
        setError('');
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    imgURL: loggedUser.photoURL,
                }

                // save user in the DB
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className=' flex flex-col md:flex-row mx-4 my-10 gap-10'>
            <div className='w-full md:w-1/3 mx-auto md:mt-36'>
                <img src={loginImg} alt="" />
            </div>

            <form className='w-full md:w-1/3 mx-auto md:mt-24 p-2 md:p-5 lg:p-10 rounded-lg bg-[#ad1a19] ' onSubmit={handleSubmit(onSubmit)}>

                <h5 className='text-center font-semibold text-3xl'>Please Login</h5>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full h-10 px-4 rounded-md"
                        type="email"
                        placeholder='Enter your email'
                        {...register("email")} required />
                </div>

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="w-full h-10 px-4 rounded-md"
                        type="password"
                        placeholder='Enter your password'
                        {...register("password")} required />
                </div>

                <p className='text-center'>New to AV Kitchen? <Link to='/sign-up' className='underline font-semibold'> Please Sign-up</Link></p>

                <div className="flex justify-center my-10">

                    <button type="submit" className="bg-black btn w-1/2 p-1 rounded-md text-white flex justify-evenly items-center">Submit </button>
                </div>

                <div className='border-2 w-3/4 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div onClick={handleGoogle} className='btn h-14 w-3/4 ml-10 flex items-center justify-center bg-black rounded-lg p-2 gap-5 my-5 cursor-pointer'>
                    <img  src={GoogleImg} className='w-10 ' alt="" />
                    <p className="text-2xl">Google Login</p>
                   
                </div>

            </form>

        </div>
    );
};

export default Login;