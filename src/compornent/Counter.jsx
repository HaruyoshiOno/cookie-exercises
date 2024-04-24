import React, { useEffect } from "react";
import { useState } from "react";

export const Counter = ({item}) => {
        // 商品個数をカウントする
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


        const cookieSave = () => {
                // 商品個数
                const quantity = count;

                // 商品情報と個数をオブジェクトにまとめる
                const cartItem = {
                    item: item,
                    quantity: quantity
                };

                // カート情報をCookieに保存する
                document.cookie = "cartItem=" + JSON.stringify(cartItem);
                console.log('cartItem',cartItem);

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
        }

        useEffect(() => {
            cookieSave();
        },[count]);



            


        return (
            <>
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
            </>
        )
} 