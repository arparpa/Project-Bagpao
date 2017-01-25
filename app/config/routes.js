var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Login = require('../components/Login');
var Trips = require('../containers/TripsCon');
var Places = require('../containers/PlacesCon');
var Contact = require('../containers/ContactCon');

var routes = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {Home} />
      <Route path = 'trips' header = 'Find the trips' component = {Trips}/>
      <Route path = 'trips/:trips' header = 'Find' component = {Tripsearch}/>
      <Route path = 'places' header = 'Places' component = {Places}/>
      <Route path = 'contact' header = 'Contact Us' component = {Contact}/>
      <Route path = 'login' header = 'Login/Sign Up' component = {Login}/>
    </Route>
  </Router>
);

module.exports = routes;
