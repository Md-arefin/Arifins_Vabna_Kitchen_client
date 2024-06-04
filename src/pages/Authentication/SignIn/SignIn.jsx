import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import GoogleImg from "../../../assets/google.png";
import signUp from "../../../assets/sign-up.jpg";



const SignIn = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    return (
        <div className=' flex flex-col md:flex-row mx-4 my-10 gap-10'>
            <div className='w-full md:w-1/3 mx-auto md:mt-36'>
                <img src={signUp} alt="" />
            </div>

            <form className='w-full md:w-1/3 mx-auto md:mt-24 p-2 md:p-5 lg:p-10 rounded-lg bg-[#ad1a19] ' onSubmit={''}>

                <h5 className='text-center font-semibold text-3xl'>Register</h5>

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

                <div className="flex flex-col gap-3  mb-2">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        className="w-full h-10 px-4 rounded-md"
                        type="password"
                        placeholder='Confirm your password'
                        {...register("password")} required />
                </div>


                <p className='text-center'>Already have an account? <Link to='/login' className='underline font-semibold'> Please Login</Link></p>

                <div className="flex justify-center my-10">

                    <button type="submit" className="bg-black btn w-1/2 p-1 rounded-md text-white flex justify-evenly items-center">Submit </button>
                </div>

                <div className='border-2 w-3/4 mx-auto my-5'></div>

                <h5 className='text-center font-semibold text-3xl'>Social Login</h5>

                <div onClick={''} className='btn h-14 w-3/4 ml-10 flex items-center justify-center bg-black rounded-lg p-2 gap-5 my-5 cursor-pointer'>
                    <img src={GoogleImg} className='w-10 ' alt="" />
                    <p className="text-2xl">Google Login</p>

                </div>

            </form>

        </div>
    );
};

export default SignIn;