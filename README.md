# workshop-react
React.js workshop


- ES6
- 'hello world' - static component
- props
- state - interaction (inside 1 component) - example - checkbox, input (search) onkeyup


class ExampleComponent extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = { data : [] }
    }
    render() { 
        return <div onClick={this.handleClick}>Hello, world.</div>;
    }
    handleClick() {
        console.log(this); // this is an ExampleComponent
    }
}


- interaction between components - input search -> filter results (.map)


https://github.com/kingjulien/workshop-react.git