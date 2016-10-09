/* globals React */
/* exported Games */

var Games = React.createClass({
  render: function(){
    let gameContent;
    if (this.props.cat.games.length) {
      gameContent = this.props.cat.games.map(function(game) {
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
    return(<ul>{gameContent}</ul>)
  }
})
