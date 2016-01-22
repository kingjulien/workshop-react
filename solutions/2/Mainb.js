import React from 'react';

class AppComponent extends React.Component {

    render() {
        var Helloes = this.props.names.map(function (name) {
            return (
                <Hello name={name}/>
            );
        });

        return (
            <div className="index">
                {Helloes}
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