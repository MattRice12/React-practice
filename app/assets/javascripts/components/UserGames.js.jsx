var UserGames = React.createClass({
  render: function(){
    return(<ul>
      {this.props.cat.games.map((game) => {
        {if (game.user_id === this.props.user.id) {
          return(<div key={game.id} className="obj-with-del">
            <img className="thumb" src={game.gamepic_url_thumb} alt=""/>
            <h4 className="obj-name">
              <a href={"/games/" + game.id}>{game.name}</a>
            </h4>
        </div>)}}
      })}
  </ul>)}
})
