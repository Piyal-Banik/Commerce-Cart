import React, {Component} from 'react';

import './aboutpage.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import CustomerService from '../../components/customer-service/customer-service.component';

class AboutPage extends Component {
    render() {
        return(
            <div className='about-page'>
                <div className='jumbotron'>
                    <img src='/images/aboutus.jpg'  alt='aboutus' className='background-image'/>
                    <div className='overlay'></div>
                    <div className='info-section'>
                        <SectionTitle className='title' title='About Us' />
                        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>

                <div className='customer-service'>
                    <CustomerService title='Mission' >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </CustomerService>

                    <CustomerService title='Passion' >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </CustomerService>

                    <CustomerService title='Our Company' >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </CustomerService>
                </div>


            </div>
        );
    };
};

export default AboutPage;