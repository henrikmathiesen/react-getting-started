var PlayNineDoneFrame = React.createClass({

    render: function(){
        return(
            <div>
                <h3>{ this.props.doneStatus }</h3>
                <br /><br />
                <div>
                    <button onClick={ this.props.resetGame }>Play Again?</button>
                </div>
            </div>
        )
    }

});