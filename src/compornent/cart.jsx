import React, { useEffect } from 'react';
import { items } from './Items';
import { CartItem } from './CartItem';
// import { Counter } from './Counter';
// import { Btn } from './Btn';





export const Cart = () => {

// Cookieからデータを取得する関数
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    let cookieValue = null;
    cookieArray.forEach(cookie => {
        let trimmedCookie = cookie.trim(); // 余分な空白をトリム
        if (trimmedCookie.indexOf(name) === 0) {
            cookieValue = trimmedCookie.substring(name.length, trimmedCookie.length);
        }
    });
    return cookieValue;
}

// 二つのCookieを取得する
const item_qt = getCookie('item_qt');
const item_id = getCookie('item_id');

// 取得したCookieの値を表示
console.log("item_qt:", item_qt);
console.log("item_id:", item_id);
        

    // 合計金額
    let flg = false;
    let total = 0

    const AllPrice = () => {
    if(!flg){
            const prices = document.querySelectorAll('.cart-total');
            const totalPrice = document.querySelector('.cart-money');
            prices.forEach((price) => {
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
                    {items.map((item) => (
                        <CartItem item={item} key={item.id}/>
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