var PlayNineGame = React.createClass({

    render: function(){
        return(
            <div>
                <h2>Play Nine</h2>
                <PlayNineStarsFrame />
                <PlayNineButtonFrame />
                <PlayNineAnswerFrame />
                <PlayNineNumbersFrame />
            </div>
        )
    }

});

ReactDOM.render(<PlayNineGame />, document.getElementById('play-nine'));