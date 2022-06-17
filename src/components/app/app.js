import React , { useState } from "react";
import AppHeader from "../app-header";
import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list";
import AppFooter from "../app-footer/app-footer";

export default function App (){
    const [items, setItems] = useState(                        
        [
            { id: 1, label: 'Make summary', done: false },
            { id: 2, label: 'Make todo App', done: false },
            { id: 3, label: 'Apply for a good job', done: false }
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

    const itemsLeft= items.filter((item) => !item.done).length;
   
    return(
     <div>
         <AppHeader/>
         <ItemAddForm/>
         <TodoList items={items} togleDone={togleDone} />
         <AppFooter itemsLeft={itemsLeft} />
     </div>
    )
};



