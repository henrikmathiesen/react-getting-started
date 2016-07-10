var CardFormComponent = React.createClass({

    getInitialState: function () {
        return {
            loginName: ''
        };
    },

    submitLoginName: function(e){
        e.preventDefault();
        this.props.submitLoginName(this.state.loginName);
    },

    setLoginName: function(e){
        this.setState({ loginName: e.target.value });
    },

    render: function(){
        return(
            <form onSubmit={ this.submitLoginName }>
                <div>
                    <input type="text" placeholder="GitHub login" onChange={ this.setLoginName } />
                </div>
                <br />
                <div>
                    <button>Add</button>
                </div>
            </form>
        )
    }

});