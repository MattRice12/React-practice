const AddFriend = React.createClass({
  makeFriend: function(e) {

    $.ajax({
      url: '../friendships/',
      method: 'POST',
      data: JSON.stringify({
        user_id: this.props.user.id,
        friend_id: this.props.friend.id
      }),
      contentType: "application/json",
    });
  },

  render: function() {
    return (
        <form className="new_friend" onSubmit={this.makeFriend}>
          <input type="submit" value="Befriend" className="btn"/>
        </form>
    )
  }
});
