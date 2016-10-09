/* globals React */
/* exported Games */

var Games = React.createClass({
  render: function(){
    let gameContent;
    if (this.props.cat.games.length) {
      gameContent = this.props.cat.games.map(function(game) {
        return (
          <li key={game.id} className="content">
            <div>
              <h4>
                <a href={"/games/" + game.id}>{game.name}</a>

                <Delete obj={game}
                        url={"games"}/>

              </h4>
            </div>
          </li>);
      });
    }
    return(<ul>{gameContent}</ul>)
  }
})
