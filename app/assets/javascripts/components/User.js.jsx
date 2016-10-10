var User = React.createClass({
  render: function(){
    return(<div className="content">
      <h1 className="title is-1 user">{this.props.user.username}</h1>

      <div className="columns">
        {this.props.categories.map((cat) => {
          return (
          <div key={cat.id} className="column">
            <h2 className="category-name title is-2">{cat.name}</h2>
            <UserGames cat={cat}
                       user={this.props.user}/>
          </div>
        )
        })}
      </div>

      <a href="/games/new" className="button is-primary">Add Game</a>
    </div>)
  }
});
