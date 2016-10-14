var Games = React.createClass({
  render: function(){
    let gamesContent;
    if (this.props.cat.games.length) {
      gamesContent = this.props.cat.games.map(function(game) {
        return (
          <div key={game.id} className="obj-with-del">
            <div className="thumb">
              <img src={game.gamepic_url_thumb} alt={game.name} title={game.name}/>
            </div>
            <h4 className="obj-name">
              <a href={"/games/" + game.id}>{game.name}</a>
            </h4>
            <Delete obj={game}
                    url={"games"}/>
          </div>);
      });
    } else {
      gamesContent = <p>{"no games exist in this category"}</p>
    }
    return(<div>{gamesContent}</div>)
  }
})
