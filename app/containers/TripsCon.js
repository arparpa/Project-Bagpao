var React = require('react');
var styles = require('../styles');
var Trips = require('../components/Trips');
 
var TripsCon = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    }
  },

  handleUpdateUser: function(event) {
    this.setState({
      username: event.target.value
    });
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
      this.context.router.push('/trips/'+this.state.username)
  },

  render: function () {
    return(
     <Trips
      onSubmitUser = {this.handleSubmitUser}
      onUpdateUser = {this.handleUpdateUser}
      header = {this.props.route.header}
      username = {this.state.username}
      />
    )
  }
});
 
module.exports = TripsCon;