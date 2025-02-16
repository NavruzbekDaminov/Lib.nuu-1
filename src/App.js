import React from 'react';
import {Routes, Route,} from 'react-router-dom';

import Main from "./main";
import Kitoblar from './components/kitoblar'
import Yangiliklar from './components/yangiliklar'
import Kirish from './components/kirish'

import "./app.scss";


function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/Kitoblar" element={<Kitoblar/>} />
                <Route path="/Yangiliklar" element={<Yangiliklar/>} />
                <Route path="/Kirish" element={<Kirish/>} />
                <Route path="/" element={<Main/>} />
            </Routes>
        </div>
    );
}

export default App;