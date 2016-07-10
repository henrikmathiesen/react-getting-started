var PlayNineGame = React.createClass({

    getInitialState: function () {
        return {
            selectedNumbers: [],
            numberOfStars: Math.floor(Math.random() * (9 - 1 + 1) + 1)
        }
    },

    selectNumber: function (selectedNumber) {
        // If selected number already is in array, user cant select it again
        if (this.state.selectedNumbers.indexOf(selectedNumber) !== -1) { return }
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(selectedNumber)
        });
    },

    unSelectNumber: function (unSelectedNumber) {
        var selectedNumbersCopy = this.state.selectedNumbers;
        var unSelectedNumberIndex = selectedNumbersCopy.indexOf(unSelectedNumber);
        selectedNumbersCopy.splice(unSelectedNumberIndex, 1);

        this.setState({
            selectedNumbers: selectedNumbersCopy
        });
    },

    render: function () {
        var selectedNumbers = this.state.selectedNumbers;
        var numberOfStars = this.state.numberOfStars;

        return (
            <div>
                <h2>Play Nine</h2>
                <PlayNineStarsFrame numberOfStars={ numberOfStars } />
                <PlayNineButtonFrame selectedNumbers={ selectedNumbers } />
                <PlayNineAnswerFrame selectedNumbers={ selectedNumbers } unSelectNumber={ this.unSelectNumber } />
                <PlayNineNumbersFrame selectedNumbers={ selectedNumbers } selectNumber={ this.selectNumber } />
            </div>
        )
    }

});

ReactDOM.render(<PlayNineGame />, document.getElementById('play-nine'));