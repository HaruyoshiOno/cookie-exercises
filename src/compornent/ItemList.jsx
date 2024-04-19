import React from "react";
import { Btn } from "./Btn";
import { useState } from "react";

export const ItemList = ({item}) => {

    // 商品個数をカウントする
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(prevCount => prevCount - 1);
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };


    // 商品個数
    const quantity = count;

    // 商品情報と個数をオブジェクトにまとめる
    const cartItem = {
        item: item,
        quantity: quantity
    };

    // カート情報をCookieに保存する
    document.cookie = "cartItem=" + JSON.stringify(cartItem);

    // Cookieからカート情報を取得する
    const getCartItemFromCookie = () => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf("cartItem=") == 0) {
                return JSON.parse(cookie.substring("cartItem=".length, cookie.length));
            }
        }
        return null;
    }

    // カート情報を取得してコンソールに出力
    const savedCartItem = getCartItemFromCookie();
    console.log(savedCartItem);

    return (
        <li>
            <img src={item.src} alt={item.alt} />
            <p className="itembox-maker">{item.maker}</p>
            <p className="itembox-name">{item.name}</p>
            <p className="itembox-price">￥{item.price}<span>税込</span></p>
            <div className="itembox-container">
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
                <Btn />
            </div>
        </li>
    )
}

