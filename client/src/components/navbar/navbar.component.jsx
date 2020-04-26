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

                    <div className='myAccount option'>
                        <NavLink activeClassName='selected' to='/account'>MY ACCOUNT</NavLink>
                        <div className='accountBlock'>
                            <div className='accountBlockInfo'>
                                <div className="accountBlockTitle"><strong>Welcome</strong></div>
                                <span>In order to manage personal account</span>
                                <div>
                                    <button>Sign Up</button>
                                    <button>Log In</button>
                                </div>
                                <hr />
                            </div>
                            
                            <div className='accountOptions'>
                                <NavLink className="accountOption" to='/profile'>PROFILE</NavLink>
                                <NavLink className="accountOption" to='/orders'>ORDERS</NavLink>
                                <NavLink className="accountOption" to='/cart'>CART</NavLink>
                                <NavLink className="accountOption" to='/checkout'>CHECKOUT</NavLink>
                            </div>
                        </div>
                    </div>
                        
                    <CartIcon />                    
                </div>
            </div>
        );
    };
};

export default Navbar;