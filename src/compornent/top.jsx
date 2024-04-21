import React from "react";
import { ItemList } from "./ItemList";
import { items } from "./Items";


export const ItemBox = () => {

    return(
        <>
            <section className="itembox">
                <div className="itembox-inner">
                    <h2 className="itembox-title">ONLINE STORE</h2>
                    <ul className="itembox-list">
                        {items.map((item) => (
                            <ItemList item={item} key={item.id} />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

