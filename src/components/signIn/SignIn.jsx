import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../authContext/AuthContext';
import { toast } from 'react-hot-toast';

const SignIn = () => {
const {signInUserWithEmailpass,GoogleSignIn} =useContext(ContextProvider)

const navigate =useNavigate();
const location =useLocation();


const from = location.state?.from?.pathName || '/'

    const loginFormHandler =(event) => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        signInUserWithEmailpass(email,password)
        .then(result => {
            const user=result.user;
            console.log(user)
            toast.success('Login successful')
            navigate(from, { replace: true })
            form.reset()
            
        })
        
       
        .catch((error)=>{
            console.error(error)
            toast.error('sorry Login failed')
        })


    }


    const googleBtnHandler =() =>{
        GoogleSignIn()
        .then(result => {
            const user =result.user;
            console.log(user)
        })
        .then((error) => {
            console.error(error)
        })


    }


    


    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
        >
            <div
                className="
            flex flex-col
            bg-white
            shadow-md
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-8
            rounded-3xl
            w-50
            max-w-md
          "
            >
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                   Sign In Account
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your credentials to access your account
                </div>

                <div className="mt-10">
                    <form onSubmit={loginFormHandler}>
                        <div className="flex flex-col mb-5">
                            <label
                            
                                className="mb-1 text-xs tracking-wide text-gray-600"
                            >E-Mail Address:</label
                            >
                            <div className="relative">
                                <div
                                    className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                                >
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                    "
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label
                                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                            >Password:</label
                            >
                            <div className="relative">
                                <div
                                    className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                                >
                                    <span>
                                        <i className="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>

                                <input
                                    type="password"
                                    name="password"
                                    className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                    "
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="
                    flex
                    mt-2
                    items-center
                    justify-center
                    focus:outline-none
                    text-white text-sm
                    sm:text-base
                    bg-blue-500
                    hover:bg-blue-600
                    rounded-2xl
                    py-2
                    w-full
                    transition
                    duration-150
                    ease-in
                  "
                            >
                                <span className="mr-2 uppercase">Sign In</span>
                                <span>
                                   
                                </span>
                            </button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div className="flex w-full">
                            <button
                            onClick={googleBtnHandler}
                                className="
                    flex
                    mt-2
                    items-center
                    justify-center
                    focus:outline-none
                    text-white text-sm
                    sm:text-base
                    bg-green-500
                    hover:bg-blue-600
                    rounded-2xl
                    py-2
                    w-full
                    transition
                    duration-150
                    ease-in
                  "
                            >
                                <span className="mr-2 uppercase">Sign in with google</span>
                            </button>
                            
                        </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <Link
                    to="#"
                    className="
              inline-flex
              items-center
              text-gray-700
              font-medium
              text-xs text-center
            "
                >
                    <span className="ml-2"
                    >You don't have an account?
                        <Link
                            to="/signUp"
                            className="text-xs ml-2 text-blue-500 font-semibold"
                        >Register now</Link
                        ></span
                    >
                </Link>
            </div>
        </div>
    )
};

export default SignIn;