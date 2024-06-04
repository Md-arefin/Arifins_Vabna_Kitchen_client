import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    return (
        <div className='flex flex-col md:flex-row mx-4 gap-10'>
        <div className='w-full md:w-1/3 mx-auto md:mt-36'>
            <img src="" alt="" />
        </div>

        <form className='w-full md:w-1/3 mx-auto md:mt-24 p-2 md:p-5 lg:p-10 border-2 rounded-lg border-black ' onSubmit="">

            <h5 className='text-center font-semibold text-3xl'>Please Login</h5>

            <div className="flex flex-col gap-3  mb-2">
                <label htmlFor="email">Email</label>
                <input
                    className="w-full rounded-md"
                    type="email"
                    placeholder='Enter your email...'
                    {...register("email")} required />
            </div>

            <div className="flex flex-col gap-3  mb-2">
                <label htmlFor="password">Password</label>
                <input
                    className="w-full rounded-md"
                    type="password"
                    placeholder='Enter your password...'
                    {...register("password")} required />
            </div>

            <p className='text-center'>New to Travelling? <Link to='/sign-up' className='underline font-semibold'> Please Sign-up</Link></p>

            <div className="flex justify-center my-10">

                <button type="submit" className="bg-[#a98467] btn w-1/2 p-1 rounded-md border-2 text-white border-black flex justify-evenly items-center">Submit </button>
            </div>

            <div className='border-2 w-3/4 mx-auto my-5'></div>

            <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

            <div className=' flex items-center justify-evenly gap-5 my-5'>
                <img onClick="" src="" className='w-10 cursor-pointer' alt="" />
                <img src="" className='w-10 cursor-pointer' alt="" />
                <img src=''
                className='w-10 cursor-pointer' alt="" />
            </div>

        </form>

    </div>
    );
};

export default Login;