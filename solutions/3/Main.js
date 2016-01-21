import React from 'react';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var Helloes = this.props.names.map(function (name) {
            return (
                <Hello name={name}/>
            );
        });

        return (
            <div className="index">
                <Input/>
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


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value : '' }
    }

    render() {
        return (
            <input onChange={this.handleChange} type={this.props.type} value={this.state.value} placeholder={this.props.placeholder}/>
        );
    }

    handleChange(e) {
        this.setState({
            value : e.target.value
        });
    }
}

export default AppComponent;