import React from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import { withRouter } from "react-router-dom"
import HomeSplash from '../images/HomeSplash.jpg'
import NavBar from './Navbar.js'
import styled from 'styled-components';
import Logoimg from '../images/Logo_white.png'


const SignupContainer = styled.div`
    background-image: url(${HomeSplash});
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const InputContainer = styled.div`
    height: 40%;
    width: 35%;
    margin: auto 53%;
`

const Title = styled.h2`
    color: #fff;
    margin-bottom: 25px;
    text-align: center;
`

const SignupInput= styled.input`
width: 100%;
height: 50px;
padding: 0 0 0 10px;
border-radius: 5px;
border: solid 1px grey;
margin-bottom: 15px;
`

const SignupButton= styled.button`
    width: 100%;
    height: 50px;
    padding: 0;
    background-color: mediumvioletred;
    border-radius: 5px;
    color: white;
    font-size: 28px;
    margin: 25px 0;
`


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
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
      this.props.register(this.state.credentials).then(() => {
          this.props.history.push("/seller-page")
      })
      console.log(this.state.credentials, 'THESE ARE THE CREDENTIALS')
  }

  render() {
      return (
          <div className="login">
              <SignupContainer>
                <NavBar />
                <a href="/"> <img src={Logoimg} alt="logo" height="220px" width="220px" /></a>
                <InputContainer>
                <Title>Sign Up</Title>
                <form onSubmit={this.handleSubmit}>
                        <SignupInput
                            className="login-input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                        />
                    <br />
                        <SignupInput
                            className="login-input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    <br />
                    <SignupButton>Signup</SignupButton>
                </form>
                </InputContainer>
              </SignupContainer>
          </div>
      );
  }
}

export default withRouter(connect(
  null,
  {register}
)(Signup));