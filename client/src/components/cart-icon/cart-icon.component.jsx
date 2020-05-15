import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';

import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';

const CartIcon = ({cartItemsCount}) => {
    return(
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);

