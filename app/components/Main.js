var React = require('react');

var styles = require('../styles');
var Nav = require('../components/Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>

      <Nav/>
  <h1 className="text-center">BagPao Travel</h1>

      {this.props.children}


      </div>
    )
  }
});

module.exports = Main;
