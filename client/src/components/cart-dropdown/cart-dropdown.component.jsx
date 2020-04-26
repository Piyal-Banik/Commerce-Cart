import React from 'react';
import CustomButtom from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown' >
        <div className='cart-items'> 
            <span className='empty-message'>Your Cart is empty</span>
        </div>

        <CustomButtom inverted>GO TO CHECKOUT</CustomButtom>
    </div>
);

export default CartDropdown;