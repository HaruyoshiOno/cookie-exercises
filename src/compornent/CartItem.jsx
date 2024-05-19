import { useEffect, useState } from "react";
import { items } from "./Items";


export const CartItem = ({unko, qtes, childToParent}) => {

    const [count, setCount] = useState(0);
    const newCount = count + qtes;

    const getNewCount = newCount * parseFloat(items[unko].price.replace(/\D/g, ''));

    const decrease = () => {
        // カウントが0以上の時マイナスする、マイナス単位にしない
        if (newCount <= 0) {
            return
            // setCount(prevCount => prevCount = 0);
        } else {
            setCount(prevCount => prevCount - 1);
            childToParent(getNewCount); //4.親から受け取った関数に合計金額を入れる
        }
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
        childToParent(getNewCount); //4.親から受け取った関数に合計金額を入れる
    };


    useEffect(() => {
        childToParent(getNewCount);
      },[count]) 



    

        return (
            <div className="cart-item">
                <div className="cart-flavor">
                    <p className="cart-img"><img src={items[unko].src} alt="item.alt" /></p>
                    <div className="cart-goods">
                        <p className="cart-maker">{items[unko].maker}</p>
                        <p className="cart-name">{items[unko].name}</p>
                        <p className="cart-price">{items[unko].price}<span>税込</span></p>
                    </div>
                </div>
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count + qtes}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
                <p className="cart-total">¥{getNewCount}<span>税込</span></p>
            </div>
        )
}
