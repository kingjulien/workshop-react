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


##Intro task
- write 'hello world'

##Tasks:
1. nested components
- create new component Hello & render it from AppComponent
2. props
    pass the name, f.e. 'John' as parameter to Hello component
        2a) set default parameter
        2b) map - display list of names - call Hello component for every name
3. state, events - interaction
    create input (react) element, render it from AppComponent
    bind onChange event to input element
4. create live search component, which will contain input box & list of filtered elements

Bonus:
5. create recursive component(s), f.e. for displaying navigation (ul, li)
6. use Redux for storing - https://github.com/rackt/redux