import React from 'react';


//FOR DISPLAYING KEYS AND CLICK HANDLING OF A CALC
class TouchKeys extends React.Component {
  render() {
      if (this.props.type) {
        return (
          <div className="Operator">
            <div className="ui inverted segment">
              <button className="ui inverted blue basic button, big ui button" 
                onClick={this.props.onClickHandler}>{this.props.text}
              </button>
            </div>
          </div>
        )
      }

      return (
          <button className="tiny ui button, ui black button" onClick={this.props.onClickHandler}>
            {this.props.text}
          </button>
      )
  }
}

export default TouchKeys;