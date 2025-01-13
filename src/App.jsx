import './index.css';
import './App.css';
import { Center } from '../Components/Center.jsx';
import { Sidebar } from '../Components/Sidebar.jsx';

const App = () => {
    return (
        <div className="flex h-auto">
            <div className="h-auto">
                <Sidebar/>
            </div>
            <div className="mx-32">
                <Center/>
            </div>
        </div>
    );
};

export default App;
