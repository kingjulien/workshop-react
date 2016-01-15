import React from 'react';

let Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      name: 'Erik'
    };
  },

  render: function() {
    return (
      <div className="hello-world">
        hello {this.props.name}
      </div>
    );
  }

});

export default Hello;