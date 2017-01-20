var React = require('react');
var styles = require('../styles');

function Tripsearch (props) {
    return(
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style = {styles.transparentBg}>
        <h2>{this.props.route.header}</h2>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='Chiangmai'
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
 
module.exports = Tripsearch;