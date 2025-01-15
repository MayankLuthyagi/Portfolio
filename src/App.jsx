import './index.css';
import './App.css';
import { Center } from '../Components/Center.jsx';
import { Sidebar } from '../Components/Sidebar.jsx';
import { Navbar } from '../Components/Navbar.jsx';

const App = () => {
    return (
        <div className="">
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-1 h-screen md:h-full">
                <div className="lg:block hidden lg:h-full">
                    <Sidebar/>
                </div>
                <div className="flex justify-start md:justify-center md:mt-4 md:mx-56">
                    <Center/>
                </div>
            </div>
        </div>
    );
};

export default App;
