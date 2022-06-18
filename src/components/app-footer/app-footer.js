import React from "react";
import "./app-footer.css";
import ItemsLeft from "../items-left/items-left";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

export default function AppFooter({itemsLeft, onFilter}){
    return (
        <div>
                <ItemsLeft itemsLeft={itemsLeft} />
                <ItemStatusFilter onFilter={onFilter} />
        </div>
    )
};




