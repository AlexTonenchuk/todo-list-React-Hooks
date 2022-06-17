import React from "react";
import "./app-footer.css";
import ItemsLeft from "../items-left/items-left";

export default function AppFooter({itemsLeft}){
    return (
        <div>
            <span>
                <ItemsLeft itemsLeft={itemsLeft} />
            </span>
        </div>
    )
};




