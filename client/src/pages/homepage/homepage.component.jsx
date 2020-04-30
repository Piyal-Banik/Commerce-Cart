import React, {Component} from 'react';

import './homepage.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';
import Directory from '../../components/directory/directory.component';
import CustomerService from '../../components/customer-service/customer-service.component';
import DealsSection from '../../components/deals/deals.component';
import Newsletter from '../../components/newsletter-singup/newsletter-signup.component';
import Featured from '../../components/featured/featured.component';

class HomePage extends Component {
    render() {
        return(
            <div className='homepage'>
                
                <div className='jumbotron'>
                    <div className='text-area'>
                        <h1 className='title'>New Watch Collection</h1>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p className='details'>Starting from $150</p>
                        <div className='buttons'>
                            <CustomButton inverted>Buy Now</CustomButton>
                            <CustomButton>Learn More</CustomButton>
                        </div>
                    </div>
                </div>

                <div className='customer-service'>
                    <CustomerService image='/images/return-logo.png' title='Return within 30days'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </CustomerService>  

                    <CustomerService info='original' image='/images/original-logo.png' title='100% Original'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </CustomerService>

                    <CustomerService info='delivery' image='/images/shipping-logo.png' title='Get free delivery'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </CustomerService>
                </div>             

                <Directory />

                <DealsSection />

                <Featured />

                <Newsletter />

            </div>
        );
    }
};

export default HomePage;