import React, {Component} from 'react';
import './navbar.styles.scss';

import {NavLink} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';

class Navbar extends Component {
    render() {
        return(
            <div className = 'navbar'>
                <NavLink className='logo-container' to='/' >
                    <Logo className='logo'/>
                </NavLink>

                <div className='options'>
                    <NavLink className='option' to='/'>HOME</NavLink>
                    <NavLink className='option' activeClassName='selected' to='/shop'>SHOP</NavLink>
                    <NavLink className='option' activeClassName='selected' to='/about'>ABOUT</NavLink>
                    <NavLink className='option' activeClassName='selected' to='/contact'>CONTACT</NavLink>
                    <NavLink className='option' activeClassName='selected' to='/account'>MY ACCOUNT</NavLink>
                    
                    <CartIcon />
                </div>
            </div>
        );
    };
};

export default Navbar;