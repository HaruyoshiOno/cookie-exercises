import React, { useEffect } from 'react';
import { items } from './Items';
import { CartItem } from './CartItem';
// import { Counter } from './Counter';
// import { Btn } from './Btn';





export const Cart = () => {

    let item_id = [];
    let item_qt = [];

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

        const read_cookie = getCartItemFromCookie();
        console.log(read_cookie);

        item_id.push(Number(read_cookie.id));
        item_qt.push(read_cookie.quantity);

        console.log(item_id);
        console.log(item_qt);

    // 合計金額
    let flg = false;
    let total = 0

    const AllPrice = () => {
    if(!flg){
            const prices = document.querySelectorAll('.cart-total');
            //console.log('prices', prices);
            const totalPrice = document.querySelector('.cart-money');
            prices.forEach((price) => {
                //console.log('price', price);
                total += parseFloat(price.textContent.replace(/\D/g, ''));
            });
            totalPrice.textContent = total;
            flg = true;
        };
    }

    useEffect (() => {
        AllPrice()
    },[]);

return (
<>
    <section className="cart">
        <div className="cart-inner">
            <h2 className="cart-title">Cart</h2>
            
            <div className="cart-container">
                <div className="cart-list">
                    <ul className="cart-category">
                        <li className="cart-type">商品</li>
                        <li className="cart-type">数量</li>
                        <li className="cart-type">合計</li>
                    </ul>
                    {item_id.map((id, index) => (
                        <CartItem id={id}  qt={item_qt[index]}/>
                    ))}
                </div>
                <div className="cart-side">
                    <div className="cart-plus">
                        <p className="cart-sum">合計</p>
                        <p className="cart-money">{total}<span>税込</span></p>
                    </div>
                    {/* <Btn /> */}
                    {/* <Btn backgroundColor="#fff"/> */}
                </div>
            </div>
        </div>
    </section>
</>
);
};




export default Cart;