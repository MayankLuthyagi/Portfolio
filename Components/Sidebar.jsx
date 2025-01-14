import '../src/index.css';
import '../src/App.css';

export const Sidebar = () => {
    return (
        <div className="flex w-80 justify-center border-r-2 border-b-2 rounded-br grey-color">
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
                        <a href="https://www.linkedin.com/in/mayank012/" target="_blank">
                            <img
                                className="rounded-full border-2 w-8 h-8"
                                src="/linkedin.png"
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="mailto:mayankluthyagico@gmail.com" target="_blank">
                            <img
                                className="rounded-full border-2 w-8 h-8"
                                src="/email.png"
                                alt="Email"
                            />
                        </a>
                        <a href="http://github.com/mayankluthyagi" target="_blank">
                            <img
                                className="rounded-full border-2 w-8 h-8"
                                src="/github.png"
                                alt="GitHub"
                            />
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
