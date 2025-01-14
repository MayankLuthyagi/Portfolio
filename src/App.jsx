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
        <div className="flex flex-1 h-screen">
            <div className="flex">
                <Sidebar/>
            </div>
            <div className="flex justify-center mt-4 mx-56">
                <Center/>
            </div>
        </div>
        </div>
    );
};

export default App;
