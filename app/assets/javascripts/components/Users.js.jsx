var Users = React.createClass({
  render: function() {
    let currentUser = this.props.current_user;
    return(
      <div className="content">
        <h1 className="title is-1 user"> All Users: </h1>
        <div>
          {this.props.users.map(function(user) {
            if (currentUser.admin === true) {
              canDelete = <Delete obj={user}
                      url={"users"}/>;
            }
            return (
              <div key={user.id} className="obj-with-del">
                <ObjectList obj={user}
                            url={"users"}/>
                {canDelete}
                <AddFriend user={currentUser} friend={user}/>
              </div>
              )
            })
          }
        </div>
      </div>
    )
  }
});
