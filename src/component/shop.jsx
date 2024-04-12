import React from 'react';
import {productData} from './items.jsx'

class Shop extends React.Component {
    render() {
      return (
        <div className='shop'>
          <div className='pagetitle'>ONLINE STORE</div>
          <div className='item_area'>
            {productData.map((product, index) => (
              <div className='item' key={index}>
                <img src={product.image} className='ItemImage' alt='ItemImage' />
                <div className='textarea'>
                  <p className='brandname'>{product.brand}</p>
                  <h1 className='itemtitle'>{product.name}</h1>
                  <p className='price'>{product.price}<span className='zeikomi'>税込</span></p>
                </div>
                <div className='cart_in_area'  onClick={(event) => handleClick(event)}>
                  <div className='quantity'>
                      <p className='minus'>-</p>
                      <p className='select-qt'>1</p>
                      <p className='plus'>+</p>
                  </div>
                  <div className='CartButton' alt='CartButton' onClick={() => getClassIndex(index)}>
                    カートに追加
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  const handleClick = (event) => {
    const cartInarea = event.target.closest('.cart_in_area');
    if (cartInarea) {
        if (event.target.classList.contains('plus')) {
        const clickedButton = event.target;
        const getQtNum = document.getElementsByClassName('plus');
        const index = Array.from(getQtNum).indexOf(clickedButton);
        let quantity = document.getElementsByClassName('select-qt')[index].textContent;
        if(Number(quantity < 9)){
            document.getElementsByClassName('select-qt')[index].textContent = Number(quantity) + 1;
        }
        } else if(event.target.classList.contains('minus')) {
            const clickedButton = event.target;
            const getQtNum = document.getElementsByClassName('minus');
            const index = Array.from(getQtNum).indexOf(clickedButton);
            let quantity = document.getElementsByClassName('select-qt')[index].textContent;
            if(Number(quantity > 1)){
                document.getElementsByClassName('select-qt')[index].textContent = Number(quantity) - 1;
            }
        }
    }
};

  const getClassIndex = (index) => {
    const cookie = document.cookie;
    const cookieIdIsQt = cookie.replace(/(?:(?:^|.*;\s*)qt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const cookieIdIsId = cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let QtArray = cookieIdIsQt ? cookieIdIsQt.split(',') : [];
    let IdArray = cookieIdIsId ? cookieIdIsId.split(',') : [];

    const quantity = Number(document.getElementsByClassName('select-qt')[index].textContent);

    QtArray.push(quantity);
    IdArray.push(index);

    document.cookie = "qt=" + QtArray + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.cookie = "id=" + IdArray + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    console.log(QtArray);
    console.log(IdArray);
};
  
  export default Shop;