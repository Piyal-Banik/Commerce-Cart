import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {addCurrentUser, removeCurrentUser} from '../../redux/user/user.actions';
import {selectCurrentUser, selectToken} from '../../redux/user/user.selector';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    signIn = (event) => {
        event.preventDefault();

        axios({
            url: '/users/signin',
            data: {
                username: this.state.username,
                password: this.state.password
            },
            method: 'POST'
        })
        .then(response => {
            console.log(response.data.user);
            this.restoreState();
            var user = {user: response.data.user, token: response.data.token}
            this.props.addCurrentUser(user);
        })
        .catch(error => console.log(error))
    }

    handleTextChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    }

    restoreState = () => {
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        console.log(this.props);
        return(
            <div className='signin'>
                {!this.props.currentUser ? 
                    <form onSubmit={this.signIn}>
                        <label for='username'>User Name</label>
                        <br />
                        <input type='text' name='username' value={this.state.username} onChange={this.handleTextChange}/>
                        <br /> <br />

                        <label for='password'>Password</label>
                        <br />
                        <input type='password' name='password' value={this.state.password} onChange={this.handleTextChange}/>
                        <br /> <br />

                        <button>Log In</button>
                    </form>
                    :
                    <button>Sign Out</button>
                }
                
            </div>
        );
    };
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    token: selectToken
});

const mapDispatchToProps = dispatch => ({
    addCurrentUser: (user) => dispatch(addCurrentUser(user)),
    removeCurrentUser: () => dispatch(removeCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);