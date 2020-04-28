import React from 'react';

import './deals.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const DealsSection = () => {
    return(
        <div className='deals-section'>
            <div className='section'>
                <h1 className='title'>Great Clothing Deals</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <CustomButton inverted>Shop Now</CustomButton>
            </div>

            <div className='divider'></div>

            <div className='section'>
                <h1 className='title'>20% Off First Order</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <CustomButton inverted>Shop Now</CustomButton>
            </div>
        </div>
    );
};

export default DealsSection;