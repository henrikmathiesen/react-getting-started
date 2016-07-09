var Button = React.createClass({

    localHandleClick: function(){
        this.props.localHandleClick(this.props.increment);
    },

    // render is the only required member of a React Class
    render: function(){
        return (
            <button onClick={ this.localHandleClick }>+ { this.props.increment }</button>
        )
    }

});