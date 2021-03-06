var CardComponentMain = React.createClass({

    getInitialState: function () {
        return {
            logins: ['petehunt', 'OdeToCode', 'pecka']
        };
    },

    submitLoginName: function(loginName){
        var newLogins = this.state.logins;
        newLogins.push(loginName);

        this.setState({ logins: newLogins });
    },

    // removeLogin: function(index){
    //     var newLogins = this.state.logins;
    //     newLogins.splice(index, 1);

    //     this.setState({ logins: newLogins });
    // },

    render: function () {
        var component = this;

        var cards = this.state.logins.map(function(login, index){
            return (<CardComponent key={ index } login={ login } />)
        });

        // ^ same as:
        // var cards = [];
        // for (i = 0; i < this.state.logins.length; i += 1) { 
        //     cards.push(<CardComponent key={i} login={this.state.logins[i]} />)
        // }

        return (
            <div>
                <div>{ cards }</div>
                <br /><br /><br />
                <div>
                    <CardFormComponent submitLoginName={this.submitLoginName} />
                </div>
            </div>
        )
    }

});

ReactDOM.render(<CardComponentMain />, document.getElementById('card-component'));