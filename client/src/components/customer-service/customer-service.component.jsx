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

export default CustomerService;