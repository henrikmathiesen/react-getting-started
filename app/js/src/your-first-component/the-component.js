var Button = React.createClass({

    // This sets up the initial state, in ES6 we do this in the constructor (see reactLearnCodeAcademy > 03-flux > Todos.js)
    getInitialState: function(){
        return {
            counter: 0
        }
    },

    handleClick: function(){
        this.setState({ counter: this.state.counter + 1 });
    },

    // render is the only required member of a React Class
    render: function(){
        return (
            <button onClick={ this.handleClick }>{ this.state.counter }</button>
        )
    }

});

ReactDOM.render(<Button />, document.getElementById('your-first-component'));