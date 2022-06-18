import React , { useState } from "react";
import AppHeader from "../app-header";
import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list";
import AppFooter from "../app-footer/app-footer";


export default function App (){

    //states:

    const [items, setItems] = useState(                        
        [
            { id: 1, label: 'Make summary', done: false },
            { id: 2, label: 'Make todo App', done: false },
            { id: 3, label: 'Apply for a good job', done: false },
            { id: 4, label: 'Do sport', done: false },
        ]
    );

    const [filter, setFilter] = useState('all');

    
    //handlers:

    const onTogleDone=(id)=>{
        const index = items.findIndex((item) => item.id === id);
        setItems((items)=>{
            const newItems=[...items];
            newItems[index].done=!newItems[index].done;
            return newItems;
        });
    };

    const onFilter=(e)=>{
        setFilter((filter)=>{
            const selectedFilter=e.target.value;
            return selectedFilter;
        });
    }


    // computed data:

    const calculateItemsLeft =(items)=>{
        const arrayItemsLeft=items.filter((item) =>!item.done)
        const itemsLeft=arrayItemsLeft.length;
        return itemsLeft;
    }

    const filterItems=(items, filter)=>{
        let filteredArray = items;
        switch (filter) {
            case 'all':
                filteredArray = items;
                break;
            case 'active':
                filteredArray = items.filter((item)=>item.done===false);
                break;
            case 'completed':
                filteredArray = items.filter((item)=>item.done===true);
                break;
            default:
                alert ('erorr in filret/switch')
        };
        return filteredArray;
    }

  
    return (
        <div>
            <AppHeader/>
            <ItemAddForm/>
            <TodoList  
                items={filterItems(items, filter)} 
                togleDone={onTogleDone}
            />
            <AppFooter 
                itemsLeft={calculateItemsLeft(items)} 
                onFilter={onFilter} 
            />
        </div>
    )
};



