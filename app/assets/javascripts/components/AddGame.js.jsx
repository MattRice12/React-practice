const AddGame = React.createClass({
  addToGamecollection: function(e) {

    $.ajax({
      url: '../game_collections/',
      method: 'POST',
      dataType: 'JSON',
      data: JSON.stringify({
        user_id: this.props.user.id,
        game_id: this.props.game.id
      }),
      contentType: "application/json",
    });
  },

  render: function() {
    return (
        <form className="new_game" onSubmit={this.addToGamecollection}>
          <input type="submit" value="Add Game to Collection" className="button is-primary"/>
        </form>
    )
  }
});
