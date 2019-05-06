import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';

import { userActions } from './../_actions'

import './../../styles/style.css';

const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
class LoginPage extends PureComponent {

  state = {
    email: "", password: ""
  }

  handleSubmit = async (e) => {
    e.preventDefault(); 
    let obj = {
      "email": "hruday@gmail.com",
      "password": "hruday123"
    };
    const { email, password } = this.props; 
    if (!this.validateEmailPattern(email))
      return alert("Invalid format of email");
    if (email === obj["email"] && password === obj["password"])
      return this.props.history.push('/home');
    alert("PLease Check your credentials")
  }

  validateEmailPattern = (email) => {
    return emailPattern.test(email);
  }

  render() {
    const { setUserId, setPassword } = this.props;
    return (
      <Fragment>
        <div className="formdiv">
          <div className="stylediv">
            <p className="footerlogo" id="footerlogo">Emp Management</p>
            <div className="logindiv">
              <p>Signin by entering the information below</p>
              <form onSubmit={this.handleSubmit}>
                <div className="feild">
                  <input type="email" name="email" placeholder="User Name" required onChange={({ currentTarget: Input }) => setUserId(Input.value)} />
                </div>
                <div className="feild">
                  <input type="Password" name="password" placeholder="Password" required onChange={({ currentTarget: Input }) => setPassword(Input.value)} />
                </div>
                <div className="feild btnflexfeild">
                  <input type="submit" className="login_btn" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => { 
  const { authentication: { email, password } } = state;
  return {
    email: email,
    password: password
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserId: (val) => dispatch(userActions.setUserId(val)),
    setPassword: (val) => dispatch(userActions.setPassword(val))
  }
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default connectedLoginPage;