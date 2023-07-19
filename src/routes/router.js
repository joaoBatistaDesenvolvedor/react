import React from "react";
import {  Routes,Route } from "react-router-dom";
import Main from "../componets/main";
import About from "../componets/about.js";
import Contact from "../componets/contact.js";
export default function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}