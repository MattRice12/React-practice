var Delete = React.createClass({

  handleDelete: function (e) {
    $.ajax({
      url: "/" + this.props.url + "/" + this.props.obj.id,
      method: "DELETE",
      });
  },

  render: function() {
    let deleteMessage = "Delete";
    if (this.props.url === "friendships") {
      deleteMessage = "End Friendship"
    };
    return (
      <a onClick={this.handleDelete} className="button is-small is-danger is-outlined react-clear" title="Delete">{deleteMessage}</a>
    )
  }
});
