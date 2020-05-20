import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { withRouter } from "react-router-dom"
import HomeSplash from '../images/HomeSplash.jpg'
import styled from 'styled-components';
import NavBar from './Navbar'
import Logoimg from '../images/Logo_white.png'

const LoginContainer = styled.div`
    background-image: url(${HomeSplash});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    height: 40%;
    width: 35%;
    margin: 10% 55%;
`

const Title = styled.h2`
    color: #fff;
    margin-bottom: 25px;
    text-align: center;
`

const LoginInput= styled.input`
    width: 100%;
    height: 50px;
    padding: 0 0 0 10px;
    border-radius: 5px;
    border: solid 1px grey;
    margin-bottom: 15px;
`

const LoginButton= styled.button`
    width: 100%;
    height: 50px;
    padding: 0;
    background-color: mediumvioletred;
    border-radius: 5px;
    color: white;
    font-size: 28px;
    margin: 25px 0;
`

class Login extends React.Component {

    state = {
        credentials: {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push("/seller-page")
        })
        console.log(this.state.credentials, 'THESE ARE THE LOGIN SUBMISSION')
    }

    render() {
        return (
            <div className="login">
                <LoginContainer>
                    <NavBar />
                    <InputContainer>
                    <Title> LOGIN </Title>
                    <form onSubmit={this.handleSubmit}>
                            <LoginInput
                                className="login-input"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={this.state.credentials.email}
                                onChange={this.handleChange}
                            />
                        <br />
                            <LoginInput
                                className="login-input"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                        <br />
                        <LoginButton>Login</LoginButton>
                    </form>
                    </InputContainer>
                </LoginContainer>
            </div>
        );
    }
}

export default withRouter(connect(
    null,
    { login }
)(Login));

