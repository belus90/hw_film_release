import React from "react";

const Film = ({name, children}) => {

    return (
        <>
        <ul>
            <li>
            <h3><a href={children}>{name} </a></h3>

            </li>
        
        </ul>
        
        </>
    );
}

export default Film;