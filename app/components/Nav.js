import React from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var styles = require('../styles');




var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default" style={styles.transparentBg}>
          <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <div className="row">

          <ul className="nav navbar-nav navbar-right">
          <li>  <a href="/login">Login/Sign Up</a></li>
          </ul>
        </div>

        <center><a href="/"><img style={styles.img_header} src = "app/img/header.png" width="460" height="345"/></a>
        </center>



        <div className="col-sm-5 col-sm-offset-4 col-md-6 col-md-offset-4">

          <ul className="nav nav-pills" style={styles.header_menu}>
          <li><a href="/"><h4>Home</h4></a></li>
          <li><a href="/trips"><h4>Trips</h4></a></li>
          <li><a href="/places"><h4>Places</h4></a></li>
          <li><a href="/contact"><h4>Contact Us</h4></a></li>
          </ul>

          </div>

        </div>


        </div>
    </nav>


    </div>
    )
  }
});

module.exports = Nav;
