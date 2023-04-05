import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
        </BrowserRouter>
    )
}