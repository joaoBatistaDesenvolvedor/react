import React from "react";
export default function Menus(props){
    return(
        <ul>
            <li><a href={props.url}>{props.name}</a></li>
</ul>
    )
}