import React from "react";
import { Navigate } from "react-router-dom";
export default function Menus(props){
    return(
        <ul><li><a href={props.url}>{props.name}</a></li></ul>
    )
}