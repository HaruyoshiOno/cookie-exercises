import { Btn } from "./Btn";

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

    // const quantity = document.querySelectorAll('itembox-decrease');
    // const increase = document.querySelectorAll('itembox-number');
    // const increase = document.querySelectorAll('itembox-increase');

    


    return(
        <>
            <section className="itembox">
                <div className="itembox-inner">
                    <ul className="itembox-list">
                        {items.map((item, index) => {
                            return(
                                <li key={index}>
                                    <img src={item.src} alt={item.alt} />
                                    <p className="itembox-maker">{item.maker}</p>
                                    <p className="itembox-name">{item.name}</p>
                                    <p className="itembox-price">￥{item.price}<span>税込</span></p>
                                    <div className="itembox-container">
                                        <div className="itembox-quantity">
                                            <p className="itembox-decrease">-</p>
                                            <p className="itembox-number"></p>
                                            <p className="itembox-increase">+</p>
                                        </div>
                                        <Btn />
                                    </div>
                                </li>
                            );
                            })}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default ItemBox;