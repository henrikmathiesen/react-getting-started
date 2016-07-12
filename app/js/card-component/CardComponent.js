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
                component.setState({ 
                    cardOutLine: '2px solid red'
                });
            });
    },

    // Cant get delete to work, same problem as this guy: http://stackoverflow.com/questions/32658604/react-deleting-from-middle-of-list-removes-last-element-instead
    // We get back to it some other time
    // removeCard: function(){
    //     this.props.removeCard(this.props.index);
    // },

    render: function () {
        return (
            <div style={{ outline: this.state.cardOutLine, padding: '8px' }}>
                <img src={ this.state.user.avatar_url } style={{ width: '120px', height: 'auto' }} />
                <h3>{ this.state.user.name }</h3>
            </div>
        )
    }

});