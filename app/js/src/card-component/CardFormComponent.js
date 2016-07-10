var CardFormComponent = React.createClass({

    submitLoginName: function(e){
        e.preventDefault();
        this.props.submitLoginName(this.refs.loginName.value);
        this.refs.loginName.value = "";
    },

    render: function(){
        return(
            <form onSubmit={ this.submitLoginName }>
                <div>
                    <input type="text" placeholder="GitHub login" ref="loginName" />
                </div>
                <br />
                <div>
                    <button>Add</button>
                </div>
            </form>
        )
    }

});