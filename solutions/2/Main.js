import React from 'react';

class AppComponent extends React.Component {

    render() {
        return (
            <div className="index">
                <Hello name="John"/>
            </div>
        );
    }
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

Hello.defaultProps = {
    name : 'Jonatan'
};

export default AppComponent;