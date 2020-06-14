import React, {Component} from 'react';
import './navbar.styles.scss';

import {NavLink} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import MyAccountNavOption from '../myaccount-dropdown/myaccount-dropdown.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import ShopOptions from '../shop-dropdown/shop-dropdown.component';

class Navbar extends Component {
    render() {
        return(
            <div className = 'navbar'>
                <NavLink className='logo-container' to='/' >
                    <Logo className='logo'/>
                </NavLink>

                <div className='options'>
                    <NavLink className='option' to='/'>HOME</NavLink>
                    
                    <div className="shopBlock option">
                        <NavLink className='option' activeClassName='selected' to='/shop'>SHOP</NavLink>
                        <ShopOptions className='shopOptions'/>
                    </div>
                    
                    <NavLink className='option' activeClassName='selected' to='/about'>ABOUT</NavLink>
                    <NavLink className='option' activeClassName='selected' to='/contact'>CONTACT</NavLink>

                    <div className='myAccount option'>
                        <NavLink className='option' activeClassName='selected' to='/my-account'>MY ACCOUNT</NavLink>
                        <MyAccountNavOption className='accountBlock'/>
                    </div>
    
                    <div className='cart'>
                        <CartIcon />
                        <CartDropdown className='cart-dropdown' />
                    </div>
                                  
                </div>
            </div>
        );
    };
};

export default Navbar;