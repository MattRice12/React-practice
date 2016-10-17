var Delete = React.createClass({


  handleDelete: function (e) {
    let targName = this.props.obj.name;

    if (this.props.url === "users") {
      targName = this.props.obj.username;
    } else if ((this.props.url === "game_collections") || (this.props.url === "friendships")) {
      targName = this.props.obj.id;
    }
    ;

    $.ajax({
      url: "/" + this.props.url + "/" + targName,
      method: "DELETE",
    });
  },

  render: function() {
    let deleteMessage = "Delete";
    if (this.props.url === "friendships") {
      deleteMessage = "End Friendship"
    }
    else if (this.props.url === "game_collections") {
      deleteMessage = "Remove Game from Collection"
    };
    return (
      <a onClick={this.handleDelete} className="button is-small is-danger is-outlined react-clear" title="Delete">{deleteMessage}</a>
    )
  }
});
