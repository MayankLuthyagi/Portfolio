import '../src/index.css';
import '../src/App.css';
import { useState } from "react";

export const Sidebar = () => {
    const [hoveredLink, setHoveredLink] = useState('');

    const handleMouseEnter = (name) => {
        setHoveredLink(name);
    };

    const handleMouseLeave = () => {
        setHoveredLink('');
    };

    return (
        <div className="flex md:w-80 sm:w-5 justify-center border-r-2 border-b-2 md:h-full rounded-br grey-color">
            <div className="flex flex-col items-center m-8 h-full">
                <div>
                    <img
                        src="/passport.png"
                        alt="Passport"
                        className="rounded-full w-44 h-44"
                    />
                </div>
                <div className="text-white mt-8 text-center">
                    <h3 className="text-xl font-bold">Mayank Singh</h3>
                    <hr className="my-6 border-gray-500 w-60" />
                    <div className="flex justify-evenly my-4 w-full">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mayank012/"
                            target="_blank"
                            rel="noreferrer"
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('LinkedIn')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="rounded-full border-2 w-8 h-8"
                                src="/linkedin.png"
                                alt="LinkedIn"
                            />
                            {hoveredLink === 'LinkedIn' && (
                                <div className="absolute top-[150%] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-[10px] px-3 py-1 rounded shadow-lg">
                                    LinkedIn
                                    <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
                                </div>
                            )}
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:mayankluthyagico@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('Email')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="rounded-full border-2 w-8 h-8"
                                src="/email.png"
                                alt="Email"
                            />
                            {hoveredLink === 'Email' && (
                                <div className="absolute top-[150%] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-[10px] px-3 py-1 rounded shadow-lg">
                                    Email
                                    <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
                                </div>
                            )}
                        </a>

                        {/* GitHub */}
                        <a
                            href="http://github.com/mayankluthyagi"
                            target="_blank"
                            rel="noreferrer"
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('GitHub')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="rounded-full border-2 w-8 h-8"
                                src="/github.png"
                                alt="GitHub"
                            />
                            {hoveredLink === 'GitHub' && (
                                <div className="absolute top-[150%] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-[10px] px-3 py-1 rounded shadow-lg">
                                    GitHub
                                    <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
                                </div>
                            )}
                        </a>
                    </div>
                    <hr className="my-2 border-gray-500 w-full" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Blogs</h3>
                <div className="w-64 border-2 border-white rounded-xl mt-4 p-4 text-sm text-white text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...
                </div>
            </div>
        </div>
    );
};
