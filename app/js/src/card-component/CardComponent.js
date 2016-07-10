var CardComponent = React.createClass({

    getInitialState: function () {
        return {
            user: {},
            cardOutLine: ''
        };
    },

    // correct hook for fetching ajax data; http://busypeoples.github.io/post/react-component-lifecycle/
    componentDidMount: function () {
        var component = this;

        axios.get('https://api.github.com/users/' + this.props.login)
            .then(function (response) {
                component.setState({ 
                    user: response.data,
                    cardOutLine: response.data.public_repos > 0 ? '2px solid olive' : '2px solid red'
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    removeCard: function(){
        this.props.removeCard(this.props.index);
    },

    render: function () {
        return (
            <div style={{ outline: this.state.cardOutLine, padding: '8px' }}>
                <img src={ this.state.user.avatar_url } style={{ width: '120px', height: 'auto' }} />
                <h3>{ this.state.user.name }</h3>
                <br />
                <div onClick={ this.removeCard }>REMOVE</div>
            </div>
        )
    }

});