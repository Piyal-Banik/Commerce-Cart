import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import SectionTitle from '../../components/section-title/section-title.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './myaccount.styles.scss';

class MyAccountPage extends Component {
    render() {
        return(
            <div className='myAccountPage'>
                <SectionTitle title='My Account' />
                <div className='dashboard'>
                    <div className='dashboard-options'>
                        <NavLink className='option' to='/my-account'>Dashboard</NavLink>
                        <hr />
                        <NavLink className='option' activeClassName='selected' to='/my-account/orders'>Orders</NavLink>
                        <hr />
                        <NavLink className='option' activeClassName='selected' to='/checkout'>Checkout</NavLink>
                        <hr />
                        <NavLink className='option' activeClassName='selected' to='/my-account/details'>Account Details</NavLink>
                        <hr />
                        <NavLink className='option' to='/logout'>Logout</NavLink>
                    </div>

                    <div className='dashboard-display'>
                        <div className='dashboard-display-section'>
                            <span>Hello admin </span>
                        </div>

                        <div className='dashboard-display-section'>
                            <span>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</span>
                        </div>

                        <div className='dashboard-display-section'>
                            <CustomButton inverted>Orders</CustomButton>
                            <CustomButton inverted>Checkout</CustomButton>
                            <CustomButton inverted>Account Details</CustomButton>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

export default MyAccountPage;