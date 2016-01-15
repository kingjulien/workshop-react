require('normalize.css');
require('styles/App.css');
import React from 'react';
import Hello from 'components/Hello';

let AppComponent = React.createClass({
  render: function() {
    return (
      <Hello/>
    );
  }

});

export default AppComponent;
