import React from "react";
import { Link, Route, Routes } from "react-router-dom";

//Page 
import Q3 from "./Page/Q3";
import Q4 from "./Page/Q4";

import EventAdd from "./Action/EventAdd";
//Action
import Affiche from "./Action/Affiche";



const Menu = () => {
    return (
        <div className="Q1">
            <nav>
                <Link to="/">Q3</Link>
                <Link to='/Q4'>Q4</Link>
            </nav>

            <Routes>
            <Route exact path="*" element={<Q3 />} />
                <Route exact path="/" element={<Q3 />} />
                <Route path="/Q4" element={<Q4 />} />
                <Route path="/Q5/add/:code" element={<EventAdd />} />
                <Route path='/Q4/Affiche/:year' element={<Affiche/>}/>
            </Routes>
        </div>
    )
}

export default Menu;