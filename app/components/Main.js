var React = require('react');

var transparentBg = require('../styles').transparentBg;
var Nav = require('../components/Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>

      <Nav/>
      {this.props.children}
      <h1>BagPao Travel</h1>
      </div>
    )
  }
});

module.exports = Main;
