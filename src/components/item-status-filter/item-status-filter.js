import React from "react";
import "./item-status-filter.css"

export default function ItemStatusFilter ({onFilter}){
    return (
        <span onClick={onFilter}>
            <button value='all'>All</button>
            <button value='active'>Active</button>
            <button value='completed'>Completed</button>
        </span>
    );
};



