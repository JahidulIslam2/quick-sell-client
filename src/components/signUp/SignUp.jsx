import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../authContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { signUp, UpdateUsers } = useContext(ContextProvider)

    const navigate =useNavigate();

    const formHandler = (event) => {
        event.preventDefault()
        const formData = event.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;
        const role = formData.role.value;
        console.log(name, email, password, role)


        signUp(email, password)
            .then(data => {
                const user = data.user;
                toast.success('Successfully signed up')
                console.log(user)

                const userInfo = {
                    displayName: name,
                }
                UpdateUsers(userInfo)
                    .then(() => {
                        saveUserInfo (name,email,role)
                        formData.reset()
                    })
                    .catch((error) => {
                        console.error(error)
                    })




            })
            .catch((error) => {
                console.error(error)
            })

    }

//users info 
    const saveUserInfo = (name, email, role) => {

        const users = { name, email, role }
        fetch('https://quick-sell-server.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(users),
        })
        .then((res)=>res.json())
        .then(data => {
            console.log('users',data)
            navigate('/')

        })
        
    }



    return (
        <>

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
                        Sign Up Now
                    </div>
                    <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                        Enter your credentials to get access account
                    </div>

                    <div className="mt-10">
                        <form onSubmit={formHandler}>
                            <div className="flex flex-col mb-5">
                                <label
                                    className="mb-1 text-xs tracking-wide text-gray-600"
                                >Name:</label
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
                                        <i className="fas fa-user text-blue-500"></i>
                                    </div>

                                    <input
                                        type="text"
                                        name="name"
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
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
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
                            <label
                                className="mb-1 text-xs tracking-wide text-gray-600"
                            >Select a Option:</label
                            >
                            <div className='relative'>
                                <select name='role' className="select w-full max-w-xs">
                                    <option selected value='buyers'>buyers</option>
                                    <option value='sellers'>Sellers</option>

                                </select>
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
                                    <span className="mr-2 uppercase">Sign Up</span>
                                    <span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke-Width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <Link
                        href="#"
                        target="_blank"
                        className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
                    >
                        <span className="ml-2 text-lg"
                        >You have an account?
                            <Link to="/signIn"
                                className=" ml-2 text-blue-500 font-semibold"
                            >Login here</Link></span
                        >
                    </Link>
                </div>
            </div>

        </>
    );
};

export default SignUp;