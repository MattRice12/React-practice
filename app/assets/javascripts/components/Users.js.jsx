/* globals React */
/* exported Users */

var Users = React.createClass({
  render: function() {
    return(
      <div className="content">
        <h1 className="title is-1 user"> Friends: </h1>

        <ul className="all-users">
          {this.props.users.map(function(user) {
            return (
              <div key={user.id} className="user-with-del">
                <h4 className="user-name">
                  <li>
                    <a href={"/users/" + user.id}>{user.username}
                    </a>
                  </li>
                </h4>
                  <Delete user={user}/>
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
