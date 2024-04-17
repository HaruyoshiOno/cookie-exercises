import { useState } from "react";
import { ItemList } from "./ItemList";

export const ItemBox = () => {
    const items = [
        {
            id: 1,
            src: './src/assets/images/item/ezb.png',
            maker: 'EZOBOLIC',
            name: 'エゾボリック 宇治抹茶 3kg',
            alt: 'エゾボリック 宇治抹茶 3kg',
            price: 8960,
          },
          {
            id: 2,
            src: './src/assets/images/item/mypro.png',
            maker: 'MYPROTAIN',
            name: 'マイプロテイン チョコレート 2.5kg',
            alt: 'マイプロテイン チョコレート 2.5kg',
            price: 6600,
          },
          {
            id: 3,
            src: './src/assets/images/item/savas.png',
            maker: 'SAVAS',
            name: 'ザバス グレープフルーツ 1.8kg',
            alt: 'ザバス グレープフルーツ 1.8kg',
            price: 3980,
          },
    ];

    const [count, setCounters] = useState(0);

    const decrease = (id) => {
        setCounters(prevCounters => ({
          ...prevCounters,
          [id]: prevCounters[id] - 1
        }));
      };
    
      const increase = (id) => {
        setCounters(prevCounters => ({
          ...prevCounters,
          [id]: prevCounters[id] + 1
        }));
      };


    return(
        <>
            <section className="itembox">
                <div className="itembox-inner">
                    <ul className="itembox-list">
                        <ItemList />
                    </ul>
                </div>
            </section>
        </>
    );
};

export default ItemBox;