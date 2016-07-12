var PlayNineAnswerFrame = React.createClass({

    render: function () {
        var circleStyle = { cursor: 'pointer' };
        var numberStyle = { fontSize: '75%', position: 'relative', left: '-40px', top: '-8px' };

        var numbersMarkup = [];

        for (i = 0; i < this.props.selectedNumbers.length; i += 1) {
            numbersMarkup.push(<span key={ i } onClick={ this.props.unSelectNumber.bind(null, this.props.selectedNumbers[i]) } style={ circleStyle } className="fa fa-4x fa-circle-thin"><span style={numberStyle}>{ this.props.selectedNumbers[i]}</span></span>);
        }

        return (
            <div>
                { numbersMarkup }
            </div>
        )
    }

});