import React, {Component} from 'react';

import './aboutpage.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import CustomerService from '../../components/customer-service/customer-service.component';
import NewsLetter from '../../components/newsletter-singup/newsletter-signup.component';

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

                <div className='developer-section'>

                    <SectionTitle title='The Man' />
                    <div className='info-section'>
                        <img src='/images/piyalbanik.png' alt='' />
                        <div className='description'>
                            <div className='divider'></div>
                            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed vehicula consequat sem, vel lobortis tellus vehicula nec. 
                                Aliquam erat volutpat. Donec tellus felis, euismod a fermentum eu, maximus quis risus. 
                                Sed sollicitudin velit at turpis mattis pharetra. Nunc rutrum purus quis semper ornare.</p>
                            <p className='signature'>-Piyal Banik</p>
                        </div>
                    </div>
                </div>

                <NewsLetter className='newsletter'/>

            </div>
        );
    };
};

export default AboutPage;