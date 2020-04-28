import React from 'react';

import './customer-service.styles.scss';

const CustomerService = ({info, image, title, children}) => (
    <div className={`${info?`${info}`: ''} section`}>
        {
            image ? <img src={image} alt='' /> : ''
        }
        <h2 className='title'>{title}</h2>
        <p className='info'>{children}</p>
    </div>
);

/*const CustomerService = ({service, title, info}) => {
    return(
        <div className='customer-service'> 
            <div className='section'>
                {
                    service ? <img src='/images/return-logo.png' alt='' /> : ''
                }
                <h2 className='title'>Return within 30days</h2>
                <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>

            <div className='divider'></div>

            <div className='section original'>
                {
                    service ? <img src='/images/original-logo.png' alt='' /> : ''
                }
                
                <h2 className='title'>100% Original</h2>
                <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>

            <div className='divider'></div>

            <div className='section delivery'>
                {
                    service ? <img src='/images/shipping-logo.png' alt='' /> : ''
                }
                
                <h2 className='title'>Get free delivery</h2>
                <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>

        </div>
    );
};*/

export default CustomerService;