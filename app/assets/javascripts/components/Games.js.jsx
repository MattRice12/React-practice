var Games = React.createClass({
  render: function(){
    let canDelete;
    let gamesContent;
    let currentUser = this.props.currentUser;

    if (this.props.cat.games.length) {
      gamesContent = this.props.cat.games.map(function(game) {
        if (currentUser.admin === true) {
          canDelete = <Delete obj={game}
                  url={"games"}/>;
        }
        return (
          <div key={game.id} className="obj-with-del">
            <ObjectList obj={game}
                        url={"games"}/>
            {canDelete}
          </div>);
      });
    }

    return(<div>{gamesContent}</div>)
  }
})
