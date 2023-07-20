import React from "react";
import Menus from "./menus";

export default function Header(){
    return(
        <header>
            <Menus url="/" name="Home"/>
            <Menus url="/about" name="About"/>
            
        </header>
    )
}