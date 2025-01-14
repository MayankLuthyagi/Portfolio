import '../src/index.css';
export const Center = () => {
    return (
        <div className="flex-1 flex">
            <div
                className="w-auto border-2 border-white rounded-xl grey-color justify-start items-start text-[15px] text-white px-8 pt-8"
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