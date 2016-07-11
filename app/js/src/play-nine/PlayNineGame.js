var PlayNineGame = React.createClass({

    getInitialState: function () {
        return {
            selectedNumbers: [],
            usedNumbers: [],
            numberOfStars: this.randomNumberOneToNine(),
            correct: null,
            redrawCount: 5,
            doneStatus: null
        }
    },

    randomNumberOneToNine: function () {
        return Math.floor(Math.random() * (9 - 1 + 1) + 1)
    },

    selectNumber: function (selectedNumber) {
        // If selected number already is a selected number or a used number, user cant select it again
        if (this.state.selectedNumbers.indexOf(selectedNumber) !== -1 || this.state.usedNumbers.indexOf(selectedNumber) !== -1) { return }
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(selectedNumber),
            correct: null
        });
    },

    unSelectNumber: function (unSelectedNumber) {
        var selectedNumbersCopy = this.state.selectedNumbers;
        var unSelectedNumberIndex = selectedNumbersCopy.indexOf(unSelectedNumber);
        selectedNumbersCopy.splice(unSelectedNumberIndex, 1);

        this.setState({
            selectedNumbers: selectedNumbersCopy,
            correct: null
        });
    },

    checkAnswer: function () {
        var selectedNumbersSum = 0;
        for (i = 0; i < this.state.selectedNumbers.length; i += 1) {
            selectedNumbersSum += this.state.selectedNumbers[i];
        }

        var correct = selectedNumbersSum === this.state.numberOfStars;
        this.setState({ correct: correct });
    },

    acceptAnswer: function () {
        this.setState({
            usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
            selectedNumbers: [],
            numberOfStars: this.randomNumberOneToNine(),
            correct: null
        }, this.updateDoneStatus)
    },

    redraw: function () {
        if (this.state.redrawCount < 1) { return; }

        this.setState({
            redrawCount: this.state.redrawCount - 1,
            numberOfStars: this.randomNumberOneToNine(),
            correct: null,
            selectedNumbers: []
        }, this.updateDoneStatus);
    },

    possibleSolutions: function () {
        var numberOfStars = this.state.numberOfStars;
        var possibleNumbers = [];
        var usedNumbers = this.state.usedNumbers;

        for (i = 1; i <= 9; i += 1) { 
            // if number does not exist in usedNumbers, include it in possibleNumbers
            if(usedNumbers.indexOf(i) === -1) {
                possibleNumbers.push(i);
            }
        }

        // Does the possibleNumbers have any combination that equals up to the number of stars?
        return possibleCombinationSum(possibleNumbers, numberOfStars);
    },

    // This function is called from acceptAnswer and redraw, after setState is done (setState is technically async)
    updateDoneStatus: function () {
        if (this.state.usedNumbers.length === 9) {
            this.setState({
                doneStatus: "You made it!"
            });
        }
        else if (this.state.redrawCount < 1 && !this.possibleSolutions()) {
            this.setState({
                doneStatus: "Game Over!"
            });
        }
    },

    render: function () {
        var selectedNumbers = this.state.selectedNumbers;
        var usedNumbers = this.state.usedNumbers;
        var numberOfStars = this.state.numberOfStars;
        var correct = this.state.correct;
        var redrawCount = this.state.redrawCount;
        var doneStatus = this.state.doneStatus;

        var bottomFrame;

        if (doneStatus) {
            bottomFrame = <PlayNineDoneFrame doneStatus={ doneStatus } />;
        }
        else {
            bottomFrame = <PlayNineNumbersFrame selectedNumbers={ selectedNumbers } selectNumber={ this.selectNumber } usedNumbers={ usedNumbers } />;
        }

        return (
            <div>
                <h2>Play Nine</h2>
                <PlayNineStarsFrame numberOfStars={ numberOfStars } />
                <PlayNineButtonFrame selectedNumbers={ selectedNumbers } checkAnswer={ this.checkAnswer } correct={ correct } acceptAnswer={this.acceptAnswer} redraw={ this.redraw } redrawCount= { redrawCount } />
                <PlayNineAnswerFrame selectedNumbers={ selectedNumbers } unSelectNumber={ this.unSelectNumber } />
                { bottomFrame }
            </div>
        )
    }

});

ReactDOM.render(<PlayNineGame />, document.getElementById('play-nine'));