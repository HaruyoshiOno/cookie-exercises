import React from 'react';
import { Header } from "./Header";

export const Cart = () => {

    
    return (
        <>
        <Header />
            <section className="cart">
                <div className="cart-inner">
                    <h2 className="cart-title">Cart</h2>
                    <ul className="cart-category">
                        <li className="cart-type">商品</li>
                        <li className="cart-type">数量</li>
                        <li className="cart-type">合計</li>
                    </ul>
                    <div className="cart-container">
                        <div className="cart-order">
                            <div className="cart-name">
                                
                            </div>
                        </div>
                        <div className="cart-side"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;