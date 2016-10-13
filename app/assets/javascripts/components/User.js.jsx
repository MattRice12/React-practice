var User = React.createClass({
  render: function(){
    return(<div className="content">
      <a href={"/users/" + this.props.user.id + "/edit"} className="edit button is-primary">Edit User</a>
      <div className="photo">
        <img src={this.props.user.avatar_url_med} alt={this.props.user.username} title={this.props.user.username}/>
      </div>
      <h1 className="title is-1 user">{this.props.user.username}</h1>

      <div className="columns">
        {this.props.categories.map((cat) => {
          return (
          <div key={cat.id} className="column">
            <h2 className="category-name title is-2">{cat.name}</h2>
            <UserGames cat={cat}
                       user={this.props.user}
                       games={this.props.games}/>
          </div>
        )
        })}
      </div>
    </div>)
  }
});
