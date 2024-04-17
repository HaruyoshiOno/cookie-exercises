import { Btn } from "./Btn";

export const ItemList = () => {
    {items.map((item, index) => {
        return(
            <li key={index}>
                <img src={item.src} alt={item.alt} />
                <p className="itembox-maker">{item.maker}</p>
                <p className="itembox-name">{item.name}</p>
                <p className="itembox-price">￥{item.price}<span>税込</span></p>
                <div className="itembox-container">
                    <div className="itembox-quantity">
                        <button onClick={decrease} className="itembox-decrease">-</button>
                        <p className="itembox-number">{count}</p>
                        <button onClick={increase} className="itembox-increase">+</button>
                    </div>
                    <Btn />
                </div>
            </li>
        );
    })}
}

