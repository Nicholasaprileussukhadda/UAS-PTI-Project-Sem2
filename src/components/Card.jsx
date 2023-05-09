import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="container">
            <h1>{props.kota}</h1>
        </div>
    );
}

export default Card;