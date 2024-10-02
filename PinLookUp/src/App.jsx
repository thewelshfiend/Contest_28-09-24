import { Route, Routes } from 'react-router-dom';
import './App.css'
import LookUp from './Components/LookUp';
import Search from './Components/Search';

function App()
{
    return (
        <div id='app'>
            <Routes>
                <Route path='/' element={<Search />} />
                <Route path='/:pin' element={<LookUp />} />
            </Routes>
        </div>
    )
}

export default App