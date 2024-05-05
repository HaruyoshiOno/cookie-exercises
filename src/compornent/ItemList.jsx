import React, { useState } from "react";
import { Link } from "react-router-dom";
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

        const qt = "quantity=" + quantity;
        const id = "target=" + target;

       // cookieを保存
       document.cookie = qt;
       document.cookie = id;
       //console.log('qt',qt);
       //console.log('id',id);


    //カートcookie上書き阻止

    // 追加したいcookie用に空配列を用意
    const next_cookie = [];

    // 複数保存するために、各cookieごとに処理するループ
    next_cookie.forEach((newcookie)=> {
        newcookie.push(read_cookie);
    })

    // // 値を保持しているかの判定
    // if(read_cookie){
    //     // 値を保持していたら、別変数で新しく保存
    //     const next_cookie = document.cookie;
    // } else {
    //     // 値を保持していなかったらreturn
    //     return
    // }
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
                    <Link to="/cookie-exercises/Cart" onClick={(e) => cookieSave(e)} className={item.id}>カートに追加</Link>
                </p>
            </div>
        </li>
        </>
        
    )
}

