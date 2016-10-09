var Categories = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="title is-1 categories">Categories: </h1>

        <ul className="content">
          {this.props.categories.map(function(cat) {
            return (
              <div key={cat.id} className="obj-with-del">
              <li className="category-name title is-5">
                <h4 className="obj-name">
                  <a href={"/categories" + cat.id}>{cat.name}</a>
                </h4>
              </li>
              <Delete obj={cat}
                      url={"categories"}/>
            </div>
            )
          })}
        </ul>
        <a href="/categories/new" className='button is-primary'>Add Category</a>
      </div>
    )
  }
})
