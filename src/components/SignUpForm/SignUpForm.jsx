import './SignUpForm.css'
import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const formData = {...this.state};
          delete formData.confirm
          delete formData.error
          // the promise returned by the signup service method
          // will resolve to the user object included in the 
          // payload of hte JSON Web Token (JWT)
          const user = await signUp(formData);
          this.props.setUser(user)
          this.props.redirect();
        } catch {
          // An error happened on the server
          this.setState({ error: 'Sign Up failed - Try Again'})

        }
    }
    //In classes we must override the render method
    // the render method is the equivalent to a function-based component
    // (its job is to return the UI)
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <h2 className="form-title">SIGN UP</h2>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit} id="sign-up">
                <label className="input-labels">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label className="input-labels">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <p>Password <span><strong>MUST</strong></span> be 8 characters or longer</p>
                <label className="input-labels">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label className="input-labels">Confirm Password</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <br />
                <button className="signup-button" type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}