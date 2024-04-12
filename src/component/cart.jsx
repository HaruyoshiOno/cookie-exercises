import React from 'react';
import { Link } from 'react-router-dom'
import {productData} from './items.jsx'

let flg = false;

class Cart extends React.Component {

    componentDidMount() {
        if(flg == false){
        let listarea = document.getElementById('itemlist');
        let list = '';
        const cartdata = document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const selectedQtData = document.cookie.replace(/(?:(?:^|.*;\s*)qt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (cartdata.length > 0) {
            const cartdataArray = cartdata.split(',');
            const qtdataArray = selectedQtData.split(',');
            console.log(cartdataArray);
            console.log(qtdataArray);
            cartdataArray.forEach ((index, i) => {
                const item_sum_price = Number(productData[index].int) * Number(qtdataArray[i])
                const item_sum_price_string = '￥' + item_sum_price.toLocaleString();
                list +="\
                <div class='cartitem'>\
                    <div class='item'>\
                        <img src=" + productData[index].image + " class='CartImage' alt='CartImage'></img>\
                        <div class='item-param'>\
                            <p class='brand'>" + productData[index].brand + "</p>\
                            <p class='itemname'>" + productData[index].name + "</p>\
                            <p class='price'>" + productData[index].price + " <span class='tax'>税込<span></p>\
                        </div>\
                    </div>\
                    <div class='number'>\
                        <div class='quantity'>\
                            <p class='minus'>-</p>\
                            <p class='select-qt'>" + qtdataArray[i] + "</p>\
                            <p class='plus'>+</p>\
                        </div>\
                    </div>\
                    <p class='item_sum'>" + item_sum_price_string  + "</p>\
                </div>"
            });
            
            listarea.insertAdjacentHTML('afterbegin',list);
            getAllSumPrice();
        } else {
            let listarea = document.getElementById('itemlist');
            listarea.insertAdjacentHTML('afterbegin', "<div class='nothing'>カートに商品がありません</div>");
        }
        flg = true;
    } else {flg = false}
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
                        <div id='itemlist' onClick={handleClick}>
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
                        <Link to='/' className='link'><div className='goshop'>買い物を続ける</div></Link>
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
    let all_sum_price = '';

    Array.from(document.getElementsByClassName('item_sum')).forEach((price) => {
        let int = parseInt(price.textContent.replace(/[￥,]/g, ''));
        all_sum_price = Number(all_sum_price) + Number(int);
    });

    document.getElementsByClassName('sum_price')[0].textContent = '￥'+ all_sum_price.toLocaleString();
  }

  export default Cart;