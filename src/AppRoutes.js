import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";


const AppRoutes = () => {
   return(
       <Router>
        <Routes>
            <Route element = { <Home/> }  path="/" exact></Route>
            <Route element = { <Sobre/> }  path="/sobre/:postId"></Route>
        </Routes>
       </Router>
   )
}

export default AppRoutes;