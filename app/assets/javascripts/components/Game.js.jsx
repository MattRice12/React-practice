var Game = React.createClass({
  render: function() {
    let gameContent;
    let currentUser = this.props.current_user
    let addGameButton;
    let delGameButton;
    let checker = 1;

    if (this.props.game.users.length) {
      gameContent = this.props.game.users.map(function(user) {
        if (currentUser.id === user.id) {
          checker = 0;
        }
        return(<div key={user.id} className="obj-with-del">
          <li>
            <h4 className="obj-name title is-4">
              <a href={"/users/" + user.username}>{user.username}</a>
            </h4>
          </li>
        </div>);
      })
    };

    if (checker == 1) {
      addGameButton = <AddGame user={this.props.current_user} game={this.props.game}/>
    };

    if (this.props.game.game_collections.length) {
      this.props.game.game_collections.map(function(gg) {
        if (gg.user_id === currentUser.id) {
          delGameButton = <Delete obj={gg} url={"game_collections"}/>
          }
      })
    };

    return(
      <div className="content">
        <div className="photo"><img src={this.props.game.gamepic_url_med} alt=""/></div>
        <h1 className="title is-1 game">{this.props.game.name}</h1>

        <h3 className="category-name title is-3">
          <strong>Owned by: </strong>
            <ul>
              {gameContent}
              {delGameButton}
              {addGameButton}
            </ul>
          <strong>Description: </strong>
            <ul className="title is-4">{this.props.game.description}</ul>
        </h3>
        <a href={"/games/" + this.props.game.name + "/edit"} className='button is-primary'>Edit Game</a>
      </div>
    )
  }
})
