/* globals React */
/* exported Delete */

var Delete = React.createClass({
  handleDelete: function (e) {
    $.ajax({
      url: "/users/" + this.props.user.id,
      method: "DELETE",
      }).done(function (response) {
        window.location.reload();
    });
  },

  render: function() {
    return (
      <a onClick={this.handleDelete} className="button is-small is-danger is-outlined react-clear" id={"delete-" + this.props.user} title="Delete User">Delete
      </a>
    )
  }
});
