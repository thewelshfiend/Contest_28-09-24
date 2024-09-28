import { Route, Routes } from 'react-router-dom';
import './App.css'
// import LookUp from './Components/LookUp';
import Search from './Components/Search';
import { lazy, Suspense } from 'react';

function App()
{
    const LookUp = lazy(() => import('./Components/LookUp'));
    return (
        <div id='app'>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='/' element={<Search />} />
                    <Route path='/:pin' element={<LookUp />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App

const Loader = () => {
    return (
        <div id='loader-container'>
            <div className="hourglassBackground">
                <div className="hourglassContainer">
                    <div className="hourglassCurves"></div>
                    <div className="hourglassCapTop"></div>
                    <div className="hourglassGlassTop"></div>
                    <div className="hourglassSand"></div>
                    <div className="hourglassSandStream"></div>
                    <div className="hourglassCapBottom"></div>
                    <div className="hourglassGlass"></div>
                </div>
            </div>
        </div>
    )
}