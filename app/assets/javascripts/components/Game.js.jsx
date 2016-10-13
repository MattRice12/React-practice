var Game = React.createClass({
  render: function() {
    let gameContent;
    let currentUser = this.props.current_user;
    if (this.props.games.length) {
      gameContent = this.props.games.map(function(game) {
        return(<div key={game.id} className="obj-with-del">
          <li>
            <h4 className="obj-name title is-4">
              <a href={"/users/" + game.user_id}>{game.user.username}</a>
            </h4>
          </li>
          <AddGame user={currentUser} game={game}/>

        </div>);
      })
    };

    return(
      <div className="content">
        <div className="photo"><img src={this.props.game.gamepic_url_med} alt=""/></div>
        <h1 className="title is-1 game">{this.props.game.name}</h1>

        <h3 className="category-name title is-3">
          <strong>Owned by: </strong>
            <ul>{gameContent}</ul>
          <strong>Description: </strong>
            <ul className="title is-4">{this.props.game.description}</ul>
        </h3>
        <a href={"/games/" + this.props.game.id + "/edit"} className='button is-primary'>Edit Game</a>
      </div>
    )
  }
})
