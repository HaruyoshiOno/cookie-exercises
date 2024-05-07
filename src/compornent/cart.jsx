import React, { useEffect } from 'react';
import { items } from './Items';
import { CartItem } from './CartItem';
// import { Counter } from './Counter';
// import { Btn } from './Btn';





export const Cart = () => {

    //合計金額算出用
    /*--------------------------------------------*/
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
    /*--------------------------------------------*/

    //カートcookie取得用
    /*--------------------------------------------*/
    //保存されているcookieを取得する
    const read_cookie = document.cookie;


    //数量とidに分ける
    const devided_cookie = read_cookie.split("; ");

    //quantity=とtarget=は要らないので消す
    const qts = devided_cookie[0].replace("quantity=", ""); //配列0番目は数量
    const ids = devided_cookie[1].replace("target=", ""); //配列1番目はid

    //個数と商品の配列をいったん空で定義(map関数用)
    let item_qt = [];
    let item_id = [];

    //,でスプリット
    item_qt = qts.split(",");
    item_id = ids.split(",");
    
    const item_qt_number = item_qt.map((str) => {
        return parseInt(str, 10);
    });
    /*--------------------------------------------*/


    //カートcookie上書き阻止
    /*--------------------------------------------*/
    // 
    

    /*--------------------------------------------*/


    //カート表示本体
    /*--------------------------------------------*/
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
                            // 数量も回したい
                            <CartItem unko={id} qtes={item_qt_number[index]}/>
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
    /*--------------------------------------------*/
};




export default Cart;