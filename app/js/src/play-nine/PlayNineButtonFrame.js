var PlayNineButtonFrame = React.createClass({

   render: function(){
       var disabled = this.props.selectedNumbers.length === 0;

        return(
            <div>
                <button disabled={disabled}>=</button>
            </div>
        )
    }

});