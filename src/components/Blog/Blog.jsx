import React from 'react';

const Blog = () => {
    return (
            <section className=" text-gray-900">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Answer Of Some Unknown Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-bold text-2xl"> What are the different ways to manage a state in a React application?</h3>

                            <p className="mt-1 text-black">This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.There are several other ways to manage states in React, including the use of:
                            1/hooks
                            2/React Context Api
                            3/Apollo link state</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-2xl"> How does prototypical inheritance work?</h3>

                            <p className="mt-1 text-black">When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl"> What is a unit test? Why should we write unit tests?</h3>

                            <p className="mt-1 text-black">Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. “Unit testing is a great discipline, which can lead to 40% – 80% reductions in bug density

                            #They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl">React vs. Angular vs. Vue?</h3>
                            <p className="mt-1 text-black">
                                1/Anguler:   is a front-end framework with lots of components, services, and tools. On Angulars site,

                                2/react: React is considered a UI library. They define themselves,
                                react is a A JavaScript library for building user interfaces

                                3/A progressive JavaScript framework ,,,Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Blog;