export const ItemBox = () => {
    const items = [
        {
            id: 1,
            src: './path/to/image1.jpg',
            maker: 'EZOBOLIC',
            name: 'エゾボリック 宇治抹茶 3kg',
            alt: 'エゾボリック 宇治抹茶 3kg',
            price: 8960,
          },
          {
            id: 2,
            src: './path/to/image2.jpg',
            maker: 'MYPROTAIN',
            name: 'マイプロテイン チョコレート 2.5kg',
            alt: 'マイプロテイン チョコレート 2.5kg',
            price: 6600,
          },
          {
            id: 3,
            src: './path/to/image2.jpg',
            maker: 'SAVAS',
            name: 'ザバス グレープフルーツ 1.8kg',
            alt: 'ザバス グレープフルーツ 1.8kg',
            price: 3980,
          },
    ];


    return(
        <>
            <section className="itembox">
                <div className="itembox-inner">
                    <ul className="itembox-list">
                        {items.map((item, index) => {
                            return(
                                <li key={index}>
                                    {console.log("item.id", item.id)}
                                    <img src={item.src} alt={item.alt} />
                                    {console.log("item.src", item.src)}
                                    <p>￥{item.price}税込</p>
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