var UserGames = React.createClass({
  render: function(){
    return(<div>
      {this.props.games.map((game) => {
        {if (this.props.cat.id === game.category_id) {
          return(<div key={game.id} className="obj-with-del">
            <div className="thumb">
              <img src={game.gamepic_url_thumb} alt={game.name} title={game.name}/>
            </div>
            <h4 className="obj-name">
              <a href={"/games/" + game.name}>{game.name}</a>
            </h4>
        </div>)}}
      })}
  </div>)}
})
