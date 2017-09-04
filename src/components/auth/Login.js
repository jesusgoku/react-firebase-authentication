import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signUp, signOut } from '../../actions/login';

import { userSelector } from '../../selectors/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleRecover = this.handleRecover.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.signIn(email, password);
  }

  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSignUp() {
    const { email, password } = this.state;
    this.props.signUp(email, password);
  }

  handleSignOut() {
    this.props.signOut();
  }

  handleRecover(e) {
    e.preventDefault();
  }

  render() {
    const { user } = this.props;
    const { email, password } = this.state;
    return (
      <div className="Login">
        {user ? (
          <div>
            <p>Login as: {user.email}</p>
            <button type="button" className="btn btn-primary" onClick={this.handleSignOut}>Sign out</button>
          </div>
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <h4>Login</h4>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="text" name="email" id="email" className="form-control" placeholder="email" required value={email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="sr-only">Password</label>
              <input type="password" name="password" id="password" className="form-control" placeholder="password" required value={password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button type="button" className="btn btn-link" onClick={this.handleSignUp}>Sign up</button>
            <br />
            <button type="button" className="btn btn-sm btn-link" onClick={this.handleRecover}>Recover password</button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  signIn,
  signUp,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
