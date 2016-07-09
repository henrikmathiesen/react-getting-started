var HelloMessageVanilla = React.createClass({

    // The displayName string is used in debugging messages. JSX sets this value automatically
    displayName: 'HelloMessage',

    render: function(){
        return(
            React.createElement('div', { className: 'container' }, 
                React.createElement('h2', null, "Getting Started Vanilla") 
            )
        )
    }

});

ReactDOM.render(React.createElement(HelloMessageVanilla, null), document.getElementById('jsx-vs-vanilla-vanilla'));