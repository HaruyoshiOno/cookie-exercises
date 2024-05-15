import { useState } from "react";
import { items } from './Items';


export const CartItem = ({id, qt}) => {

    const [count, setCount] = useState(0);
    const nowCountqt = count + qt; 

    const decrease = () => {
        if (nowCountqt <= 0) {
            return;
            //setCount(prevCount => prevCount = 0);
        } else {
            setCount(prevCount => prevCount - 1);
        }
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };

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
