var User = React.createClass({
  render: function(){
    var parID = this.props.user.id;
    return(<div className="content">
      <h1 className="title is-1 user">{this.props.user.username}</h1>

      <div className="columns">
        {this.props.categories.map(function(cat) {
          return (

          <div key={cat.id} className="column">
            <h2 className="category-name title is-2">{cat.name}</h2>
            <ul>
              {cat.games.map(function(game) {
                {if (game.user_id === parID) {
                  return(<div key={game.id}>
                    <li className="game-name">
                      <a href={"/games/" + game.id}>{game.name}</a>
                    </li>


                </div>)}}
              })}
            </ul>
          </div>
        )
        })}
      </div>

      <a href="/games/new" className="button is-primary">Add Game</a>
    </div>)
  }
});
