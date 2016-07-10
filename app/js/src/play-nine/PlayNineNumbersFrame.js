var PlayNineNumbersFrame = React.createClass({

    render: function () {
        var circleStyle = { cursor: 'pointer' };
        var numberStyle = { fontSize: '75%', position: 'relative', left: '-40px', top: '-8px' };

        var numbersMarkup = [];

        for (i = 1; i <= 9; i += 1) {
            numbersMarkup.push(<span key={ i } style={ circleStyle } className="fa fa-4x fa-circle-thin"><span style={numberStyle}>{ i }</span></span>);
        }

        return (
            <div>
                { numbersMarkup }
            </div>
        )
    }

});