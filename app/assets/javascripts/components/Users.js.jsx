var Users = React.createClass({
  render: function() {
    let canDelete;
    let currentUser = this.props.current_user;

    let eachUser = this.props.users.map((user) => {
      return(
        <div key={user.id} className="obj-with-del">
          <ObjectList obj={user}
                      url={"users"}
                      currentUser={currentUser}/>
          <AddFriend user={currentUser} friend={user}/>
        </div>
      )
    });

    return(
      <div>
        <h1 className="title is-1"> All Users: </h1>
        <div>
          {eachUser}
        </div>
      </div>
    )
  }
});
