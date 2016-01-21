# workshop-react
React.js workshop


- ES6 some new features
    - modules
    import React from 'react'
    export function sum (x, y) { return x + y }

    - default parameters
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50

    - classes
    class User {
        constructor (id, x, y) {
            this.id = id
            this.move(x, y)
        }
        move (x, y) {
            this.x = x
            this.y = y
        }
    }

    - arrow functions
        var a2 = a.map(function(s){ return s.length });
        var a3 = a.map( s => s.length );


webpack ( = server + babel + task runner )


Intro task
- write 'hello world'

Tasks:
1. nested components
    create new component Hello & render it from AppComponent
2. props
    pass 'hello world' as parameter to Hello component
        2a) set default parameter
        2b) map - display list of names - pass an array to Hello component and rewrite it using map function
3. state - interaction
    create input (react) element, render it from AppComponent & use it to pass the name as value to Hello component
4. events
    bind onkeyup event to input element
5. create live search component, which will contain input box & list of filtered elements
6. create recursive component(s) for displaying navigation (ul, li)


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
ExampleComponent.defaultProps = {
};


https://github.com/kingjulien/workshop-react.git