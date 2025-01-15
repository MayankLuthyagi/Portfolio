import '../src/index.css';
import '../src/App.css';

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center border-b-2 w-[100vw] h-14 grey-color p-4">
            <div className="flex items-center">
                <button>
                    <img
                        src="/Hamburger-Menu.jpg"
                        alt="Hamburger Menu"
                        className="md:w-8 w-6 border-[1px] rounded"
                    />
                </button>
            </div>

            {/* Right Section - Passport Image */}
            <div className="flex items-center md:hidden">
                <img
                    className="w-8 h-8 rounded-full"
                    src="/passport.png"
                    alt="Passport"
                />
            </div>
        </div>
    );
};
