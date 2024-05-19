import React, { useEffect, useState } from 'react';
// import { items } from './Items';
import { CartItem } from './CartItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { AllPrice } from './counterSlice';
// import { Counter } from './Counter';
// import { Btn } from './Btn';





export const Cart = () => {

    const [data, setData] = useState(0); //1.親に空のstateを作る

    const childToParent = (子の合計金額) => {//2.子から受け取った合計金額を上の空のstateに入れる関数を作る
        setData(子の合計金額);
    }



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
                            <CartItem key={id} unko={id} qtes={item_qt_number[index]} childToParent={childToParent}/> //3.2で作った格納用関数を子コンポーネントに渡す

                        ))}
                    </div>
                    <div className="cart-side">
                        <div className="cart-plus">
                            <p className="cart-sum">合計</p>
                            <p className="cart-money">{data}<span>税込</span></p>
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