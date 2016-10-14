var Categories = React.createClass({
  render: function() {
    let currentUser = this.props.current_user;

    let eachCategory = this.props.categories.map((cat) => {
      return (<li key={cat.id} className="obj-with-del">
        <ObjectList obj={cat}
                    url={"categories"}
                    currentUser={currentUser}/>
      </li>
      )
    });

    return(
      <div>
        <h1 className="title is-1 categories">Categories: </h1>
        <ul className="content">
          {eachCategory}
        </ul>
        <a href="/categories/new" className='button is-primary'>Add Category</a>
      </div>
    )
  }
})
