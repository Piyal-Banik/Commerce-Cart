import React from 'react';
import {connect} from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButtom from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown' >
        <div className='cart-items'> 
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) : 
                <span className='empty-message'>Your Cart is empty</span>
            }
        </div>

        <CustomButtom onClick={() => {history.push('/checkout')}} inverted>GO TO CHECKOUT</CustomButtom>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));