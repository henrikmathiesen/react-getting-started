var PlayNineButtonFrame = React.createClass({

    getInitialState: function(){
        return {
            redrawCountOrig: this.props.redrawCount
        }
    },

    // componentWillMount: function(){
    //     redrawCountOrig: this.props.redrawCount;
    // },

    render: function () {
        var checkAnswerDisabled = this.props.selectedNumbers.length === 0;
        var correct = this.props.correct;
        var correctMessage = "";
        var redrawCount = this.props.redrawCount;
        var redrawMessage = redrawCount > 0 ? "REDRAW" : "REDRAW LIMIT";
        var redrawDisabled = redrawCount < 1;

        switch (correct) {
            case true:
                correctMessage = <button onClick={ this.props.acceptAnswer }>That is correct! Accept it?</button>;
                break;
            case false:
                correctMessage = "That is not correct";
                break;
            default:
                correctMessage = "";
                break;
        }

        return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <button style={{ width: '200px' }} disabled={ checkAnswerDisabled } onClick={ this.props.checkAnswer }>=</button>
                <span>{ correctMessage }</span>
                <button disabled={ redrawDisabled } onClick={ this.props.redraw }>{ redrawMessage } { redrawCount } / { this.state.redrawCountOrig }</button>
            </div>
        )
    }

});