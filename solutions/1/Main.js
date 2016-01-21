import React from 'react';

class AppComponent extends React.Component {

    render() {
        return (
            <div className="index">
                <Hello/>
            </div>
        );
    }
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default AppComponent;