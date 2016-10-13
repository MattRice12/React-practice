const AddGame = React.createClass({
  addToGamecollection: function(e) {
    e.preventDefault();
    console.log('body text', );
    console.log('this.props.user.id', this.props.user.id);
    console.log('this.props.game.id', this.props.game.id);

    $.ajax({
      url: '../game_collections/',
      method: 'POST',
      dataType: 'JSON',
      data: JSON.stringify({
        user_id: this.props.user.id,
        game_id: this.props.game.id
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
        <form className="new_game" onSubmit={this.addToGamecollection}>
          <input type="submit" value="Add Game" className="button is-primary"/>
        </form>
    )
  }
});
