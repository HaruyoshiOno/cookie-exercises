import React from "react";
import { Btn } from "./Btn";
import { Counter } from "./Counter";



export const ItemList = ({item}) => {

    

    return (
        <>
            <li>
            <img src={item.src} alt={item.alt} />
            <p className="itembox-maker">{item.maker}</p>
            <p className="itembox-name">{item.name}</p>
            <p className="itembox-price">{item.price}<span>税込</span></p>
            <div className="itembox-container">
                <Counter />
                <Btn />
            </div>
        </li>
        </>
        
    )
}

