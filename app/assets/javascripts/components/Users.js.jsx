var Users = React.createClass({
  render: function() {
    return(
      <div className="content">
        <h1 className="title is-1 user"> Friends: </h1>

        <ul>
          {this.props.users.map(function(user) {
            return (
              <div key={user.id} className="obj-with-del">
                <li>
                  <h4 className="obj-name">
                    <a href={"/users/" + user.id}>{user.username}
                    </a>
                  </h4>
                </li>
                <Delete obj={user}
                        url={"users"}/>
              </div>
              )
            })
          }
        </ul>
        <a href="/users/new" className='button is-primary'>Add Friend</a>
      </div>
    )
  }
});
