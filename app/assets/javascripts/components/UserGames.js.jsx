var UserGames = React.createClass({
  render: function(){
    return(<ul>
      {this.props.cat.games.map((game) => {
        {if (game.user_id === this.props.user.id) {
          return(<div key={game.id}>
            <li className="game-name">
              <a href={"/games/" + game.id}>{game.name}</a>
            </li>
        </div>)}}
      })}
  </ul>)}
})
