var Category = React.createClass({
  render: function() {
    let categoryContent;
    if (this.props.category.games.length) {
      categoryContent = this.props.category.games.map(function(game) {
        return (
          <div key={game.id} className="obj-with-del">
            <li>
              <h4 className="obj-name">
                <a href={"/games/" + game.id}>{game.name}</a>
              </h4>
            </li>
          </div>);
      });
    };

    return(
      <div>
        <h1 className="title is-1 category">{this.props.category.name}</h1>

        <div className="content">
            <ul>{categoryContent}</ul>
        </div>
      </div>
    )
  }
})
