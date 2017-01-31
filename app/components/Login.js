import React, {Component} from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render()  {
    return(

<div className="col-md-6 col-md-offset-3">

      <ul className="nav nav-tabs nav-justified">
          <li className="active"><a data-toggle="tab" href="#login"><h3>Login</h3></a></li>
          <li><a data-toggle="tab" href="#signup"><h3>Sign Up</h3></a></li>
      </ul>


        <div className="tab-content">
          <div id="login" className="tab-pane fade in active">
          <center> <LoginForm/></center>
          </div>

          <div id="signup" className="tab-pane fade">
            <center>Ut enim ad minim veniam, quis nostrud exercitation ul consequat.</center>
          </div>
        </div>
</div>



    );
  }
}

module.exports = Login;
