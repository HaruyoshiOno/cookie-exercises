import { useState } from "react";
import { items } from './Items';


<<<<<<< Updated upstream
export const CartItem = ({id, qt}) => {
=======
export const CartItem = ({unko, qtes, childToParent}) => {
>>>>>>> Stashed changes

    const [count, setCount] = useState(0);
    const nowCountqt = count + qt; 

    const getNewCount = newCount * parseFloat(items[unko].price.replace(/\D/g, ''));

    const decrease = () => {
<<<<<<< Updated upstream
        if (nowCountqt <= 0) {
            return;
            //setCount(prevCount => prevCount = 0);
=======
        // カウントが0以上の時マイナスする、マイナス単位にしない
        if (newCount <= 0) {
            return
>>>>>>> Stashed changes
        } else {
            setCount(prevCount => prevCount - 1);
            childToParent(getNewCount); //4.親から受け取った関数に合計金額を入れる
        }
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
        childToParent(getNewCount); //4.親から受け取った関数に合計金額を入れる
    };

<<<<<<< Updated upstream
=======
    console.log('getNewCount',getNewCount);

>>>>>>> Stashed changes
        return (
            <div className="cart-item">
                <div className="cart-flavor">
                    <p className="cart-img"><img src={items[id].src} alt="item.alt" /></p>
                    <div className="cart-goods">
                        <p className="cart-maker">{items[id].maker}</p>
                        <p className="cart-name">{items[id].name}</p>
                        <p className="cart-price">{items[id].price}<span>税込</span></p>
                    </div>
                </div>
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count + qt}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
                <p className="cart-total">{items[id].price}<span>税込</span></p>
            </div>
        )
}