var Delete = React.createClass({
  handleDelete: function (e) {
    console.log(this.props)
    $.ajax({
      url: "/" + this.props.url + "/" + this.props.obj.id,
      method: "DELETE",
      });
  },

  render: function() {
    return (
      <a onClick={this.handleDelete} className="button is-small is-danger is-outlined react-clear" title="Delete User">Delete
      </a>
    )
  }
});
