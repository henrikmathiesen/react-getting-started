var CardComponent = React.createClass({

    getInitialState: function () {
        return {};
    },

    // correct hook for fetching ajax data; http://busypeoples.github.io/post/react-component-lifecycle/
    componentDidMount: function () {
        var component = this;

        axios.get('https://api.github.com/users/' + this.props.login)
            .then(function (response) {
                component.setState(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    render: function () {
        return (
            <div style={{ outline: '2px solid gold', padding: '8px' }}>
                <img src={ this.state.avatar_url } style={{ width: '120px', height: 'auto' }} />
                <h3>{ this.state.name }</h3>
            </div>
        )
    }

});