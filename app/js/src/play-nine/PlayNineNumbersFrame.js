var PlayNineNumbersFrame = React.createClass({
    
    render: function(){
        var numberStyle = { fontSize:'75%', position: 'relative', left: '-40px', top: '-8px' };

        return(
            <div>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>1</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>2</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>3</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>4</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>5</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>6</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>7</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>8</span></span>
                <span className="fa fa-4x fa-circle-thin"><span style={numberStyle}>9</span></span>
            </div>
        )
    }

});