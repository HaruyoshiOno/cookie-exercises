import React, { useState } from "react";
// import { Btn } from "./Btn";
// import { Counter } from "./Counter";



export const ItemList = ({item}) => {

    const [count, setCount] = useState(0);

    const decrease = () => {
        if (count <= 0) {
            setCount(prevCount => prevCount = 0);
        } else {
            setCount(prevCount => prevCount - 1);
        }
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };


    const cookieSave = (f) => {
        // 商品個数
        const quantity = count;

        // 商品情報
        const target = f.currentTarget.className;

        // 商品情報と個数をオブジェクトにまとめる
        
        const cartItem = {
            item: target,
            quantity: quantity
        };

        // カート情報をCookieに保存する
            document.cookie = "cartItem=" + JSON.stringify(cartItem);
            console.log('cartItem',cartItem);
    };

    return (
        <>
            <li>
            <img src={item.src} alt={item.alt} />
            <p className="itembox-maker">{item.maker}</p>
            <p className="itembox-name">{item.name}</p>
            <p className="itembox-price">{item.price}<span>税込</span></p>
            <div className="itembox-container">
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
                <p className="btn">
                    <a href="" onClick={(e) => cookieSave(e)} className={item.id}>カートに追加</a>
                </p>
            </div>
        </li>
        </>
        
    )
}

