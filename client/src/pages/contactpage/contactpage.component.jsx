
import React, {Component} from 'react';

import './contactpage.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import NewsLetter from '../../components/newsletter-singup/newsletter-signup.component';
import FormInput from '../../components/form-input/form-input.components';

class ContactPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            description: '•'
        }
    }

    enterPress = (event) => {
        if(event.key === 'Enter') {
            console.log(this.state.description);
            this.setState({description: this.state.description + "\n"});
            this.setState({description: this.state.description + "•"});
        }
    }

    handleChange = (event) => {
        this.setState({description: event.target.value})
    }


    render() {
        return(
            <div className='contact-page'>

                <div className='jumbotron'>
                    <img src='/images/contactus.jpg'  alt='aboutus' className='background-image'/>
                    <div className='overlay'></div>
                    <div className='info-section'>
                        <SectionTitle className='title' title='Contact Us' />
                        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>

                <div className='contact-options'>
                    <div className='option'>
                        <img src='/images/call-icon.png' alt=''/>
                        <h2>Talk to Sales</h2>
                        <p>Having some issues? Just pick up the phone and call us.</p>
                        <CustomButton inverted>111222333</CustomButton>
                    </div>

                    <div className='option'>
                        <img src='/images/message-icon.png' alt=''/>
                        <h2>Contact Support</h2>
                        <p>Sometimes you need a little help. Don’t worry, We’re here for you.</p>
                        <CustomButton inverted>Chat</CustomButton>
                    </div>
                </div>

                <div className='contact-form'>
                    <SectionTitle title='Ask a question' />
                    <div className='support-form'>
                        <form className='form-section'>
                            <FormInput label='Your Name (required) :' />
                            <FormInput label='Your Email (required) :' />
                            <FormInput label='Subject :' />
                            <div className="form-group">
                                <label className='label message'>Message (required) :</label>
                                <textarea value={this.state.description} className="message-box form-input" onChange={this.handleChange} onKeyPress={this.enterPress}/>
                            </div>
                            <CustomButton inverted>Send</CustomButton>
                        </form>
                    </div>
                </div>

                <NewsLetter className='newsletter'/>
                
            </div>
        );
    }
}

export default ContactPage;