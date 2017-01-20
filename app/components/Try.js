var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Try (props) {
    return(
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style = {transparentBg}>
        <h2>{props.header}</h2>
        <div className="col-sm-12">
          <form onSubmit = {props.onSubmitUser}>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='Trip Name/ City/ Place'
                onChange = {props.onUpdateUser}
                defaultValue = {props.username}
                type='text' />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Search
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  Try.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Try;