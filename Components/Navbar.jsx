import '../src/index.css';
import '../src/App.css';

export const Navbar = () => {
    return (

        <div className="flex border-b-2 w-[100vw] h-14 grey-color p-4 justify-start">
            <div className="flex items-center">
                <button >
                        <img
                        src="/Hamburger-Menu.jpg"
                        alt=""
                        className="size-8 rounded"
                    />
                </button>
            </div>
        </div>
    );
};
