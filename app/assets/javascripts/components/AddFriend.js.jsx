const AddFriend = React.createClass({
  makeFriend: function(e) {

    $.ajax({
      url: '../friendships/',
      method: 'POST',
      dataType: 'JSON',
      data: JSON.stringify({
        user_id: this.props.user.id,
        friend_id: this.props.friend.id
      }),
      contentType: "application/json",
      success: (response) => {
        console.log(response);
      }
    }).done(function (response) {
      window.location.reload();
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
