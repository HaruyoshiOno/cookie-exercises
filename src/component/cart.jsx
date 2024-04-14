import React  from 'react';
import { Link } from 'react-router-dom'
import {productData} from './items.jsx'
import EZB from './assets/item/ezb.png';
import MYPRO from './assets/item/mypro.png';
import SAVAS from './assets/item/savas.png';

const images = [EZB,MYPRO,SAVAS];

let cartdataArray = [];
let qtdataArray = [];
let item_sum_price_string_Array = [];
let cartflg = false;

class Cart extends React.Component {

    componentDidMount() {
        getAllSumPrice();
        ZeroCart();
      }

    render() {
      return (
                <div className='cart'>
                    <div className='cart-area'>
                        <div className='pagetitle'>Cart</div>
                        <div className='description'>
                            <p className='item'>商品</p>
                            <p className='number'>数量</p>
                            <p className='sum'>合計</p>
                        </div>
                        <hr />
                        {getCookieArray()}
                        <div id='itemlist' onClick={handleClick} onLoad={ZeroCart}>
                            <div id='nothing' style={{display: 'none'}}> カートに商品がありません</div>
                            {cartdataArray.map((id, index) => (
                                <div className='cartitem'>
                                <div className='item'>
                                    <img src={images[id]} className='CartImage' alt='CartImage' />
                                    <div className='item-param'>
                                        <p className='brand'>{productData[id].brand}</p>
                                        <p className='itemname'>{productData[id].name}</p>
                                        <p className='price'>{productData[id].price}<span class='tax'>税込</span></p>
                                    </div>
                                </div>
                                <div className='number'>
                                    <div className='quantity'>
                                        <p className='minus'>-</p>
                                        <p className='select-qt'>{qtdataArray[index]}</p>
                                        <p className='plus'>+</p>
                                    </div>
                                </div>
                                <p className='item_sum'>{item_sum_price_string_Array[index]}</p>
                            </div>
                            ))}
                        </div>
                        <hr />
                    </div>
                    <div className='pay-area'>
                        <div className='cartprice'>
                            <div className='sum'>合計</div>
                            <div className='sum_price'></div>
                            <div className='tax'>税込</div>
                        </div>
                        <div className='buy'>購入手続きへ</div>
                        <Link to='/cookie-exercises/' className='link'><div className='goshop'>買い物を続ける</div></Link>
                    </div>
                </div>
      );
    }
  }

  const handleClick = (event) => {
    if (event.target.classList.contains('plus')) {
      const clickedButton = event.target;
      const getQtNum = document.getElementsByClassName('plus');
      const index = Array.from(getQtNum).indexOf(clickedButton);
      let quantity = document.getElementsByClassName('select-qt')[index].textContent;
      if(Number(quantity < 9)){
        const qty = document.getElementsByClassName('select-qt')[index].textContent = Number(quantity) + 1;
        const sum_price = productData[document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(',')[index]].int * Number(qty);
        document.getElementsByClassName('item_sum')[index].textContent  = '￥' + sum_price.toLocaleString();
        let QtArray = document.cookie.replace(/(?:(?:^|.*;\s*)qt\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(',');
        QtArray[index] = qty;
        document.cookie = "qt=" + QtArray + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      }
    } else if(event.target.classList.contains('minus')) {
        const clickedButton = event.target;
        const getQtNum = document.getElementsByClassName('minus');
        const index = Array.from(getQtNum).indexOf(clickedButton);
        let quantity = document.getElementsByClassName('select-qt')[index].textContent;
        if(Number(quantity > 1)){
            const qty = document.getElementsByClassName('select-qt')[index].textContent = Number(quantity) - 1;
            const sum_price = productData[document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(',')[index]].int * Number(qty);
            document.getElementsByClassName('item_sum')[index].textContent  = '￥' + sum_price.toLocaleString();
            let QtArray = document.cookie.replace(/(?:(?:^|.*;\s*)qt\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(',');
            QtArray[index] = qty;
            document.cookie = "qt=" + QtArray + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
    }

    getAllSumPrice();

  };

  const getAllSumPrice = () => {
    let all_sum_price = '0';

    Array.from(document.getElementsByClassName('item_sum')).forEach((price) => {
        let int = parseInt(price.textContent.replace(/[￥,]/g, ''));
        all_sum_price = Number(all_sum_price) + Number(int);
    });

    document.getElementsByClassName('sum_price')[0].textContent = '￥'+ all_sum_price.toLocaleString();
  }

  const getCookieArray = () => {
    const cartdata = document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const selectedQtData = document.cookie.replace(/(?:(?:^|.*;\s*)qt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cartdata.length > 0) {
        cartdataArray = cartdata.split(',');
        qtdataArray = selectedQtData.split(',');
        console.log(cartdataArray);
        console.log(qtdataArray);
        cartflg = true;
    }

    {get_item_sum_price()}
}

const ZeroCart = () => {
    if(cartflg == false) {
        document.getElementById('nothing').style.display = 'block';
    }
}

const get_item_sum_price = () => {
    cartdataArray.forEach((id, i) => {
        const item_sum_price = Number(productData[id].int) * Number(qtdataArray[i])
        const item_sum_price_string = '￥' + item_sum_price.toLocaleString();
        item_sum_price_string_Array.push(item_sum_price_string);
    });    
}



  export default Cart;