import React from 'react';

import './newsletter-signup.styles.scss';

import SectionTitle from '../section-title/section-title.component';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';

const Newsletter = () => {
    return(
        <div className='newsletter'>
            <div className='image-section'>
                <img src='/images/newsletter.jpg'  alt='newsletter' className='background-image'/>
                <div className='overlay'></div>
            </div>
            <div className='newsletter-form'>
                <SectionTitle className='title' title='Sign up today' />
                <p className='description'>Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                laoreet dolore magna aliquam erat.</p>
                <div className='form'>
                    <FormInput className='form-input' placeholder='Your Email (required)' />

                    <CustomButton inverted>Sign Up</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;