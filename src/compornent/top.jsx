import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ItemList } from "./ItemList";
import { Header } from "./Header";
import Cart from './Cart';

export const ItemBox = () => {
    const items = [
        {
            id: 1,
            src: './src/assets/images/item/ezb.png',
            maker: 'EZOBOLIC',
            name: 'エゾボリック 宇治抹茶 3kg',
            alt: 'エゾボリック 宇治抹茶 3kg',
            price: 8 + ',' + 960,
          },
          {
            id: 2,
            src: './src/assets/images/item/mypro.png',
            maker: 'MYPROTAIN',
            name: 'マイプロテイン チョコレート 2.5kg',
            alt: 'マイプロテイン チョコレート 2.5kg',
            price: 6 + ',' + 600,
          },
          {
            id: 3,
            src: './src/assets/images/item/savas.png',
            maker: 'SAVAS',
            name: 'ザバス グレープフルーツ 1.8kg',
            alt: 'ザバス グレープフルーツ 1.8kg',
            price: 3 + ',' + 980,
          },
    ];

    


    return(
        <>
        <Header />
        <Routes>
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
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

export default ItemBox;