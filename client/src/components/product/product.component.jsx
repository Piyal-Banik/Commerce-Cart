import React from 'react';
import './product.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const Product = ({item}) => {
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
            <CustomButton inverted>Add to cart</CustomButton>
        </div>
    );
};

export default Product;