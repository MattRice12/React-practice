var GameCategories = React.createClass({
  render: function() {
    let currentUser = this.props.current_user;

    let eachCat = this.props.categories.map((cat) => {
      return (
        <div key={cat.id} className="column content">
          <h2 className="category-name title is-2">{cat.name}</h2>
          <Games cat={cat}
                 currentUser={currentUser}/>
        </div>
      )
    })

  return(<div>
    <h1 className="title is-1 games">Games: </h1>
    <div className="columns">
      {eachCat}
    </div>
    <a href="/games/new" className='button is-primary'>Add Game</a>
  </div>)
  }
})
