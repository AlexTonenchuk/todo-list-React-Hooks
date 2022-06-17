import React from "react";
import './items-left.css';

export default function ItemsLeft ({itemsLeft}){
    return (
        <span >
            {itemsLeft + ' items left'}
        </span>
    );
};



