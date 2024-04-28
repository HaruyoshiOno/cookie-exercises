import { useState } from "react";

export const Counter = ({item}) => {
        // 商品個数をカウントする
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

        return (
            <>
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
            </>
        )
} 