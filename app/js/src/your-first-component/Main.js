var Main = React.createClass({

    // This sets up the initial state, in ES6 we do this in the constructor (see reactLearnCodeAcademy > 03-flux > Todos.js)
    getInitialState: function(){
        return {
            counter: 0
        }
    },

    handleClick: function(increment){
        this.setState({
            counter: this.state.counter + increment
        });
    },

    render: function(){
        return(
            <div>
                <Button localHandleClick={ this.handleClick } increment={1} />
                <Button localHandleClick={ this.handleClick } increment={5} />
                <Result localCounter={ this.state.counter } />
            </div>
        )
    }

});

ReactDOM.render(<Main />, document.getElementById('your-first-component'));