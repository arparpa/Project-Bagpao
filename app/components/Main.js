var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
 
var Main = React.createClass({
  render: function () {
    return (

      <div className = "jumbotron col-sm-12 text-center" style = {transparentBg}>
      <h1>BagPao Travel</h1>
      <Link to = '/'>
      <button type = 'button' className='btn btn-lg btn-default'> Home </button> 
      </Link>
      <Link to = '/trips'>
      <button type = 'button' className='btn btn-lg btn-default'> Trips </button> 
      </Link>
      <Link to = '/places'>
        <button type = 'button' className='btn btn-lg btn-default'> Places </button>
      </Link>
      <Link to = '/contact'>
        <button type = 'button' className='btn btn-lg btn-default'> Contact Us </button>
      </Link>

      {this.props.children}
      </div>
    )
  }
});
 
module.exports = Main;