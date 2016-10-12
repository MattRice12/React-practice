var Friends = React.createClass({
  render: function() {
    return(
      <div className="content">
        <h1 className="title is-1 user"> My Friends: </h1>
        <div>
          {this.props.friendships.map(function(f) {
            return (
              <div key={f.id} className="obj-with-del">
                <div className="thumb">
                  <img src={f.avatar_url_thumb} alt={f.username} title={f.username}/>
                </div>
                <h4 className="obj-name">
                  <a href={"/users/" + f.friend.id}>{f.friend.username}</a>
                </h4>
                <Delete obj={f} url={"friendships"}/>
              </div>
              )
            })
          }
          <a className="title is-4 button is-primary" href="/users">Find More Friends</a>
        </div>
      </div>
    )
  }
});