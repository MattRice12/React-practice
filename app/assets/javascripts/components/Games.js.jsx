var Games = React.createClass({
  render: function(){
    let gamesContent;
    if (this.props.cat.games.length) {
      gamesContent = this.props.cat.games.map(function(game) {
        return (
          <div key={game.id} className="obj-with-del">
            <li>
              <h4 className="obj-name">
                <a href={"/games/" + game.id}>{game.name}</a>
              </h4>
            </li>
            <Delete obj={game}
                    url={"games"}/>
          </div>);
      });
    }
    return(<ul>{gamesContent}</ul>)
  }
})