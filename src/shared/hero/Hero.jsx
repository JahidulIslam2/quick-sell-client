import React from 'react';
import { Link } from 'react-router-dom';
// import alm from "../../assets/aluminium.jpg";


const Hero = () => {
    return (

        <section
        className="relative bg-[url(https://w0.peakpx.com/wallpaper/71/782/HD-wallpaper-yamaha-yzf-r1m-2018-new-sports-motorcycle-garage-japanese-motorcycles-yamaha.jpg)] bg-cover bg-center bg-no-repeat"
        >
        
            <div
                className="absolute inset-0 bg-white/40 sm:bg-transparent sm:bg-gradient-to-r sm:from-cyan-900/95 sm:to-white-500/25"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-white text-border">
                        Let Start Buy Or Sell Your Bike

                        <strong className="block font-extrabold text-rose-500">
                        Sell your old bike choose your new bike
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
                    Most easy way sell your bike at online. and buy another one
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Hero;