import React from 'react';
import './product.styles.scss';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

const Product = ({item, addItem}) => {
    const {category, name, price, discount, imageUrl, ...others} = item;
    const discountPrice = parseInt(price * (100-discount)/100);

    return(
        <div className='product'>
            <div className='image' 
                style={{backgroundImage: `url(${imageUrl})`
                }} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='category'>{category}</span>
                {
                    discount? 
                    <div className='price-section'>
                        <span className='actual-price'>${discountPrice}</span>
                        <span className='price'>${price}</span>
                        <span className='discount'>({discount}% off)</span>
                    </div> : <span className='price'>${price}</span>
                }
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Product);