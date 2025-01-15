import '../src/index.css';
export const Center = () => {
    return (
        <div className="flex-1 flex">
            <div
                className="md:w-auto text-[12px] p-4 md:border-2 md:border-white md:rounded-xl grey-color  md:text-[15px]  text-white md:px-8 md:pt-8"
            >
                <header className="mt-4">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold md:text-[18px] mb-2">Hey, I'm Mayank</h1>
                        <div className="flex  md:hidden">
                            <a href="https://www.linkedin.com/in/mayank012/" target="_blank">
                                <img
                                    className="rounded-full border-[1px] mx-1 w-4 h-4"
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                />
                            </a>
                            <a href="mailto:mayankluthyagico@gmail.com" target="_blank">
                                <img
                                    className="rounded-full border-[1px] mx-1 w-4 h-4"
                                    src="/email.png"
                                    alt="Email"
                                />
                            </a>
                            <a href="http://github.com/mayankluthyagi" target="_blank">
                                <img
                                    className="rounded-full border-[1px] mx-1 w-4 h-4"
                                    src="/github.png"
                                    alt="GitHub"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="text-gray-400">
                    <li>Completed MCA from JCBose UST, Faridabad</li>
                        <li>Aspiring Full-Stack Java Developer with a passion for software development</li>
                        <li>
                            Currently developing{' '}
                            <a href="https://github.com/MayankLuthyagi/FirstJob"
                               target="_blank"
                               className="font-bold underline text-white">
                                OpportuneX
                            </a>
                            , a platform to support freshers in their career journey
                        </li>
                        <li>
                            Backend Developer Intern at{' '}
                            <a href="https://www.talentd.in/"  target="_blank" className="font-bold underline text-white">
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
                    <h2 className="font-bold md:text-[18px] mb-2">Skills</h2>
                    <div className="skills-section text-gray-400">
                        <li> Front-End Development : HTML, CSS, JavaScript, React and Figma</li>
                        <li>Back-End Development : Java, Spring Boot, Docker, Postman, REST APIs</li>
                        <li>Databases & Cloud Tools : AWS, MySQL, MongoDB and PostgreSQL</li>
                        <li> Version Control & Collaboration: Git, GitHub, GitLab</li>
                    </div>
                </section>
                <br/>
                <section id="projects">
                    <h2 className="font-bold md:text-[18px] mb-2">Side Projects</h2>
                    <li className="text-gray-400">
                        Developed a web application that scrapes jobs from multiple platforms
                        {' '}
                        <a className="text-white font-bold underline" target="_blank" href="https://job-finder.streamlit.app/">
                            Job Finder
                        </a>
                    </li>
                    <li className="text-gray-400">
                        Automated messaging to multiple WhatsApp communities using Selenium and JSON
                        {' '}
                        <a
                            className="text-white font-bold underline"
                            target="_blank"
                            href="https://github.com/MayankLuthyagi/WhatsApp-Json-Message-Sender-Using-Selenium"
                        >WhatsAppBot</a>
                    </li>
                </section>
                <br/>
                <section id="certifications">
                    <h2 className="font-bold md:text-[18px] mb-2"> Certifications & Learning</h2>
                    <div className="text-gray-400">
                        <li>
                            Java Spring Framework 6 with Spring Boot 3{' '}
                            <a
                                className="text-white font-bold"
                                target="_blank"
                                href="https://udemy-certificate.s3.amazonaws.com/image/UC-f8f63f34-c12c-48c8-a722-3ad9deffc5e0.jpg"
                            >(<span className="underline">Udemy</span>)
                            </a>
                        </li>
                        <li>
                            Solved 500+ coding challenges across multiple platforms{' '}
                            <a className="text-white font-bold"  target="_blank" href="https://codolio.com/profile/MayankSingh">
                                (<span className="underline">codolio</span>)
                            </a>
                        </li>
                    </div>
                </section>
            </div>
        </div>
    );
};