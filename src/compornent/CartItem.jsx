import { useState } from "react";


export const CartItem = ({item}) => {

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


    // const cookieSave = (f) => {
    //     // 商品個数
    //     const quantity = count;

    //     // 商品情報
    //     const target = f.currentTarget.className;

    //     // 商品情報と個数をオブジェクトにまとめる
        
    //     const cartItem = {
    //         item: target,
    //         quantity: quantity
    //     };
    // }

        return (
            <div className="cart-item">
                <div className="cart-flavor">
                    <p className="cart-img"><img src={item.src} alt="item.alt" /></p>
                    <div className="cart-goods">
                        <p className="cart-maker">{item.maker}</p>
                        <p className="cart-name">{item.name}</p>
                        <p className="cart-price">{item.price}<span>税込</span></p>
                    </div>
                </div>
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
                <p className="cart-total">{item.price}<span>税込</span></p>
            </div>
        )
}
