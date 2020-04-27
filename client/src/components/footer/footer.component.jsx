import React, {Component} from 'react';
import './footer.styles.scss';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <div className='section'>
                    <h3>HOW WE STARTED?</h3>
                    <hr className='divider'/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                </div>

                <div className='section'>
                    <h3>PAGES</h3>
                    <hr className='divider'/>
                    <div className='pages'>
                        <NavLink className='option' to='/'>HOME</NavLink>
                        <hr />
                        <NavLink className='option' to='/shop'>SHOP</NavLink>
                        <hr />
                        <NavLink className='option' to='/about'>ABOUT</NavLink>
                        <hr />
                        <NavLink className='option' to='/contact'>CONTACT</NavLink>
                        <hr />
                        <NavLink className='option' to='/account'>MY ACCOUNT</NavLink>
                    </div>
                </div>

                <div className='section'>
                    <h3>WHY SHOP WITH US?</h3>
                    <hr className='divider'/>
                    <div className='info-container'>
                        <img className='icon' src='/images/original-logo.png'
                        alt='icon'/>
                        <span className='info'><strong>100% ORIGINAL</strong> guarantee for all products</span>
                    </div>
                    <div className='info-container'>
                        <img className='icon' src='/images/return-logo.png'
                        alt='icon'/>
                        <span className='info'><strong>Return within 30days</strong> of receiving your order</span>
                    </div>
                    <div className='info-container'>
                        <img className='icon' src='/images/shipping-logo.png'
                        alt='icon'/>
                        <span className='info'><strong>Get free delivery</strong> for every order above Rs. 1199</span>
                    </div>
                </div>

                <div className='section'>
                    <h3>SEARCH BY CATEGORIES</h3>
                    <hr className='divider'/>
                    <div className='pages'>
                        <NavLink className='option' to='/shop/phones'>PHONES</NavLink>
                        <hr />
                        <NavLink className='option' to='/shop/laptops'>LAPTOPS</NavLink>
                        <hr />
                        <NavLink className='option' to='/shop/headphones'>HEADPHONES</NavLink>
                        <hr />
                        <NavLink className='option' to='/shop/mens'>MENS</NavLink>
                        <hr />
                        <NavLink className='option' to='/shop/womens'>WOMENS</NavLink>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;