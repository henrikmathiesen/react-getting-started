var HelloMessageJsx = React.createClass({

    render: function(){

        return(
            <div className="container">
                <h2>Getting Started JSX</h2>
            </div>
        )

    }
});

ReactDOM.render(<HelloMessageJsx />, document.getElementById('jsx-vs-vanilla-jsx'));