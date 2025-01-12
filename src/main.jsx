import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

const Sidebar = () => {
    return (
        <div className="flex justify-center w-80 h-auto grey-color">
            <div className="flex flex-col items-center m-8">
                <div className="">
                    <img
                        src="/passport.png"
                        alt="Passport"
                        className="rounded-full size-44"
                    />
                </div>
                <div className="text-white mt-4">
                    <h3 className="flex text-xl font-bold justify-center">Mayank Singh</h3>
                    <p>_________________________________________</p>
                    <div className="flex flex-row justify-evenly mt-4 ">
                        <a href="https://www.linkedin.com/in/mayank012/" target="_blank">
                            <img
                                className="flex rounded-full size-8 stroke-white border-2"
                                src="/linkedin.png"
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="mailto:mayankluthyagico@gmail.com" target="_blank">
                            <img
                                className="flex rounded-full size-8 stroke-white border-2"
                                src="/email.png"
                                alt="Email"
                            />
                        </a>
                        <a href="http://github.com/mayankluthyagi" target="_blank">
                            <img
                                className="flex rounded-full size-8 stroke-white border-2"
                                src="/github.png"
                                alt="GitHub"
                            />
                        </a>
                    </div>
                    <p>_________________________________________</p>
                </div>
                <h3 className="flex mt-4 justify-center text-xl font-bold text-white">Blogs</h3>
                <div
                    className="flex justify-center w-64 h-100 grey-color border-2 border-white text-white rounded-xl mt-4">
                    <p className="truncate text-sm px-4 py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...
                    </p>
                </div>
            </div>
        </div>
    );
};

const Main = () => {
    return (
        <div className="flex-1 flex m-10 justify-center">
            <div
                className="w-auto h-auto border-2 border-white rounded-xl grey-color justify-start items-start text-white p-8"
            >
                <header>
                    <h1 className="font-bold">Hey, I'm Mayank</h1>
                    <div className="text-gray-400">
                        <li>Completed MCA from JCBose UST, Faridabad</li>
                        <li>Aspiring Full-Stack Java Developer with a passion for software development</li>
                        <li>
                            Currently developing{' '}
                            <a href="https://github.com/MayankLuthyagi/FirstJob" className="font-bold text-white">
                                OpportuneX
                            </a>
                            , a platform to support freshers in their career journey
                        </li>
                        <li>
                            Backend Developer Intern at{' '}
                            <a href="https://www.talentd.in/" className="font-bold text-white">
                                Talentd
                            </a>
                            , contributing to backend solutions
                        </li>
                        <li>
                            Open to new opportunities, feel free to connect via email - mayankluthyagico@gmail.com
                        </li>
                    </div>
                </header>
                <br/>
                <section id="skills">
                    <h2 className="font-bold">Skills</h2>
                    <div className="skills-section text-gray-400">
                        <li> Front-End Development : HTML, CSS, JavaScript, React and Figma</li>
                        <li>Back-End Development : Java, Spring Boot, Docker, Postman, REST APIs</li>
                        <li>Databases & Cloud Tools : AWS, MySQL, MongoDB and PostgreSQL</li>
                        <li> Version Control & Collaboration: Git, GitHub, GitLab</li>
                    </div>
                </section>
                <br/>
                <section id="projects">
                    <h2 className="font-bold">Side Projects</h2>
                    <li className="text-gray-400">
                        <a className="text-white font-bold" href="https://job-finder.streamlit.app/">
                            Job Finder{' '}
                        </a>
                        Developed a web application that scrapes jobs from multiple platforms
                    </li>
                    <li className="text-gray-400">
                        <a
                            className="text-white font-bold"
                            href="https://github.com/MayankLuthyagi/WhatsApp-Json-Message-Sender-Using-Selenium"
                        >
                            WhatsAppBot
                        </a>{' '}
                        Automated messaging to multiple WhatsApp communities using Selenium and JSON.
                    </li>
                </section>
                <br/>
                <section id="certifications">
                    <h2 className="font-bold"> Certifications & Learning</h2>
                    <div className="text-gray-400">
                        <li>
                            Java Spring Framework 6 with Spring Boot 3{' '}
                            <a
                                className="text-white font-bold"
                                href="https://udemy-certificate.s3.amazonaws.com/image/UC-f8f63f34-c12c-48c8-a722-3ad9deffc5e0.jpg"
                            >
                                (Udemy)
                            </a>
                        </li>
                        <li>
                            Solved 500+ coding challenges across multiple platforms{' '}
                            <a className="text-white font-bold" href="https://codolio.com/profile/MayankSingh">
                                (Codolio)
                            </a>
                        </li>
                    </div>
                </section>
            </div>
        </div>
    );
};

const BlankScreen = () => {
    return (
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
            {/* Blank screen for root */}
        </div>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router basename="/">
            <Routes>
                <Route path="/" element={<BlankScreen />} />
                <Route path="/portfolio" element={<div className="flex w-full h-full gap-4"><Sidebar /><Main /></div>} />
            </Routes>
        </Router>
    </StrictMode>
);
