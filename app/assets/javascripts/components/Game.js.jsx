var Game = React.createClass({
  render: function() {
    let gameContent;
    if (this.props.games.length) {
      gameContent = this.props.games.map(function(g) {
        return(<div key={g.id} className="obj-with-del">
          <li>
            <h4 className="obj-name title is-4">
              <a href={"/users/" + g.user_id}>{g.user.username}</a>
            </h4>
          </li>
        </div>);
      })
    };

    return(
      <div className="content">
        <h1 className="title is-1 game">{this.props.game.name}</h1>

        <h3 className="category-name title is-3">
          <strong>Owned by: </strong>
            <ul>{gameContent}</ul>
          <strong>Description: </strong>
            <ul className="title is-4">{this.props.game.description}</ul>
        </h3>
      </div>
    )
  }
})
