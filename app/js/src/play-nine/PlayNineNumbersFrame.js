var PlayNineNumbersFrame = React.createClass({

    render: function () {
        var circleStyle = { };
        var numberStyle = { fontSize: '75%', position: 'relative', left: '-40px', top: '-8px' };

        var numbersMarkup = [];

        for (i = 1; i <= 9; i += 1) {
            if(this.props.selectedNumbers.indexOf(i) !== -1) {
                circleStyle = { color: 'grey', cursor: 'not-allowed' }
            }
            else {
                circleStyle = { cursor: 'pointer' }
            }
            numbersMarkup.push(<span onClick={ this.props.selectNumber.bind(null, i) } key={ i } style={ circleStyle } className="fa fa-4x fa-circle-thin"><span style={numberStyle}>{ i }</span></span>);
        }

        return (
            <div>
                { numbersMarkup }
            </div>
        )
    }

});