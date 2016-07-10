var PlayNineButtonFrame = React.createClass({

    render: function () {
        var disabled = this.props.selectedNumbers.length === 0;
        var correct = this.props.correct;
        var correctMessage = "";

        switch (correct) {
            case true:
                correctMessage = "That is correct!";
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
                <button style={{ width: '200px' }} disabled={disabled} onClick={ this.props.checkAnswer }>=</button>
                <span>{ correctMessage }</span>
            </div>
        )
    }

});