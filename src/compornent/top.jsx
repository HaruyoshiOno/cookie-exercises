export const ItemBox = () => {
    const items = ['item1', 'item2', 'item3'];


    return(
        <>
            <section className="itembox">
                <div className="itembox-inner">
                    <ul className="itembox-list">
                        {items.map((item, index) => {
                                <li key={index}>{item}</li>
                            })}
                    </ul>
                </div>
            </section>
        </>
    );
};