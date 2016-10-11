var Signout = React.createClass({
  _signOut: function (e) {
    $.ajax({
      url: "/users/sign_out.json",
      method: "DELETE",
    }).done(function(){
      location.reload();
    });
  },

  render:function(){
    return (
      <a href="#" onClick={this._signOut} className="title is-3">Sign out</a>
    )
  },

});
