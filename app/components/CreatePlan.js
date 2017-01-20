var React = require('react');
var styles = require('../styles');


var CreatePlan = React.createClass({
  render: function () {
    return (
<div className="container-fluid" style={styles.container}>

  <div className="form-inline">

  <div className="col-md-4" >
    <h3 style={styles.left}>From</h3>
    <input type="text" className="form-control" placeholder="Enter your origin"/>
  </div>

  <div className="col-md-4" >
    <h3 style={styles.left}>To</h3>
    <input type="text" className="form-control" placeholder="Enter your destination"/>
  </div>


    <div className="dropdown col-md-4">
        <h3 style={styles.left}>Days</h3>
        <select style={styles.left} type="button" className="btn btn-default">
          <option>How many days?</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
    </div>

  </div>

  <button type="submit" className="btn btn-default dropdown col-md-6 col-md-offset-3  text-center center" >Go</button>
<div>


 </div>
</div>


    )
  }
});

module.exports = CreatePlan;
