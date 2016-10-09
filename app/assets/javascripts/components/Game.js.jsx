var Game = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="title is-1 game">{this.props.game.name}</h1>

        <div className="content">
          <h3 className="category-name title is-3">
            <strong>Owned by: </strong>
            <ul>
              {this.props.games.map(function(g) {
                return(
                  <li key={g.id} className="obj-with-del">
                    <h4 className="obj-name">
                      <a href={"/users/" + g.user_id}>{g.user.username}</a>
                    </h4>
                  </li>);
              })
            }
            </ul>
            <strong>Description: </strong>
              {this.props.game.description}
          </h3>

        </div>
      </div>
    )
  }
})
