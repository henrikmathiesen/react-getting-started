var Button = React.createClass({

    localHandleClick: function(){
        this.props.localHandleClick(this.props.increment);
    },

    render: function(){
        return (
            <button onClick={ this.localHandleClick }>+ { this.props.increment }</button>
        )
    }

});