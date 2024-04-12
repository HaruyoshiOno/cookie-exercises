import React from 'react'
import { Link } from 'react-router-dom'

import PageLogo from './assets/logo.png'
import TopButton from './assets/top.png'
import ShopButton from './assets/shop.png'
import InfoButton from './assets/info.png'
import NewsButton from './assets/news.png'
import Account from './assets/account.png'
import Cart from './assets/cart.png'

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-area'>
            <div className='headerlogo-area'>
                <img src={PageLogo} className='PageLogo' alt='PageLogo' />
            </div>
            <div className='button-area'>
                <img src={TopButton} className='TopButton' alt='TopButton' />
                <Link to='/'><img src={ShopButton} className='ShopButton' alt='ShopButton' /></Link>
                <img src={InfoButton} className='InfoButton' alt='InfoButton' />
                <img src={NewsButton} className='NewsButton' alt='NewsButton' />
            </div>
                <div className='icon-area'>
                <img src={Account} className='Account' alt='Account' />
                <Link to='/cart'><img src={Cart} className='Cart' alt='Cart' /></Link>
            </div>
        </div>
      </div>

    );
  }
}

export default Header;