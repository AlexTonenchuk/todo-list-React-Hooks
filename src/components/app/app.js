import React , { useState } from "react";
import AppHeader from "../app-header"
import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list"

export default function App (){
    const [items, setItems] = useState(                        
        [
            { id: 1, label: 'Drink Coffee', done: false },
            { id: 2, label: 'Learn React', done: false },
            { id: 3, label: 'Make Awesome App', done: false }
          ]
    );
          
    const togleDone=(id)=>{
        const index = items.findIndex((item) => item.id === id);
        setItems((items)=>{
            const newItems=[...items];
            newItems[index].done=!newItems[index].done;
            return newItems;
        });
    };

    return(
     <div>
         <AppHeader/>
         <ItemAddForm/>
         <TodoList items={items} togleDone={togleDone} />
     </div>
    )
};



