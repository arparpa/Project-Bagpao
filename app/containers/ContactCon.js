var React = require('react');
var styles = require('../styles');
 
var ContactCon = React.createClass({
  render: function () {
    return(
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style = {styles.transparentBg}>
        <h2>{this.props.route.header}</h2>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='Name'
                type='text' />
            </div>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='E-mail'
                type='text' />
            </div>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='Subject'
                type='text' />
            </div>
            <div className="form-group">
              <textarea
                className='form-control'
                placeholder='Message'
                rows =
                 '5'
                type='text' />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
 
module.exports = ContactCon;