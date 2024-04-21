import React from 'react';
import { items } from './Items';
import { Counter } from './Counter';




export const Cart = () => {

return (
<>
    <section className="cart">
        <div className="cart-inner">
            <h2 className="cart-title">Cart</h2>
            
            <div className="cart-container">
                <ul className="cart-list">
                    <ul className="cart-category">
                        <li className="cart-type">商品</li>
                        <li className="cart-type">数量</li>
                        <li className="cart-type">合計</li>
                    </ul>
                    {items.map((item) => (
                    <li className="cart-item">
                        <div className="cart-flavor">
                            <p className="cart-img"><img src={item.src} alt="item.alt" /></p>
                            <div className="cart-goods">
                                <p className="cart-maker">{item.maker}</p>
                                <p className="cart-name">{item.name}</p>
                                <p className="cart-price">{item.price}<span>税込</span></p>
                            </div>
                        </div>
                        <Counter />
                        <p className="cart-total">{item.price}<span>税込</span></p>
                    </li>
                    ))}
                </ul>
                <div className="cart-side"></div>
            </div>
        </div>
    </section>
</>
);
};

export default Cart;