import React from 'react';

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.state = {names : this.props.names};
    }

    render() {
        var Helloes = this.state.names.map(function (name) {
            return (
                <Hello name={name}/>
            );
        });

        return (
            <div className="index">
                <Input onInputChange={this.inputChange}/>
                {Helloes}
            </div>
        );
    }

    inputChange(searchString) {
        var names = this.props.names.filter(function(name) {
            return (searchString.length > 0) ? name.toLowerCase().match(searchString) : true;
        });

        this.setState({
            names : names
        });
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
        this.props.onInputChange(e.target.value);
    }
}

export default AppComponent;