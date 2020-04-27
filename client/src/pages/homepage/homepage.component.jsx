import React, {Component} from 'react';

import './homepage.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';
import Directory from '../../components/directory/directory.component';

class HomePage extends Component {
    render() {
        return(
            <div className='homepage'>
                <div className='jumbotron'>
                    <div className='text-area'>
                        <h1 className='title'>The New Watch Collection</h1>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p className='details'>Starting from $150</p>
                        <div className='buttons'>
                            <CustomButton inverted>Buy Now</CustomButton>
                            <CustomButton>Learn More</CustomButton>
                        </div>
                    </div>
                </div>

                <div className='customer-service'> 
                    <div className='section'>
                        <img src='/images/return-logo.png' alt='' />
                        <h2 className='title'>Return within 30days</h2>
                        <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                    </div>

                    <div className='section original'>
                        <img src='/images/original-logo.png' alt='' />
                        <h2 className='title'>100% Original</h2>
                        <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                    </div>

                    <div className='section delivery'>
                        <img src='/images/shipping-logo.png' alt='' />
                        <h2 className='title'>Get free delivery</h2>
                        <p className='info'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                    </div>

                </div>

                <Directory />
            </div>
        );
    }
};

export default HomePage;