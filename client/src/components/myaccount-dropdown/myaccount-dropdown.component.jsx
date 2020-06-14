import React from 'react';
import {NavLink} from 'react-router-dom';

import './myaccount-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const MyAccountNavOptions = () => {
    return(
        <div className='accountBlock'>
            <div className='accountBlockInfo'>
                <div className="accountBlockTitle"><strong>Welcome</strong></div>
                <span>In order to manage personal account</span>
                <div className='buttons'>
                    <CustomButton>Sign Up</CustomButton>
                    <CustomButton inverted>Log In</CustomButton>
                </div>
                <hr />
            </div>
            
            <div className='accountOptions'>
                <NavLink className="accountOption" to='/my-account/profile'>PROFILE</NavLink>
                <NavLink className="accountOption" to='/my-account/orders'>ORDERS</NavLink>
                <NavLink className="accountOption" to='/checkout'>CHECKOUT</NavLink>
            </div>
        </div>
    );
};

export default MyAccountNavOptions;