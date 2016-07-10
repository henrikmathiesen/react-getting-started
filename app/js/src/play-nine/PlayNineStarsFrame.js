var PlayNineStarsFrame = React.createClass({

    getRandomNumberFromOneToNine: function(){
        return Math.floor(Math.random() * (9 - 1 + 1) + 1);
    },

    render: function(){
        var numberOfStars = this.getRandomNumberFromOneToNine();
        var starsMarkup = [];

        for(i = 1; i <= numberOfStars; i+=1) {
            starsMarkup.push(<span key={i} className="fa fa-4x fa-star"></span>);
        }

        return(
            <div>
                { starsMarkup }
            </div>
        )
    }

});