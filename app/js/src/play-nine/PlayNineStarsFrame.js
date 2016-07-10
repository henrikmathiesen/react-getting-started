var PlayNineStarsFrame = React.createClass({

    render: function(){
        var starsMarkup = [];

        for(i = 0; i < this.props.numberOfStars; i+=1) {
            starsMarkup.push(<span key={i} className="fa fa-4x fa-star"></span>);
        }

        return(
            <div>
                { starsMarkup }
            </div>
        )
    }

});