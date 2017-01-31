var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
import CreatePlan from './CreatePlan';

function Home () {
    return (
     <div className = "jumbotron col-md-6 col-sm-offset-3 text-center" style = {transparentBg}>
     <CreatePlan/>
       <div className = "col-md-6 col-md-offset-3">
     <h2><u> POPULAR TRIPSS </u></h2>

     </div>
   </div>
    )
  }

module.exports = Home;
