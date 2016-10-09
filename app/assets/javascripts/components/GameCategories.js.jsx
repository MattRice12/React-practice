/* globals React */
/* exported GameCategories */

var GameCategories = React.createClass({
  render: function() {
    return(<div>
      <h1 className="title is-1 games">Games: </h1>

      <div className="columns">
        {this.props.categories.map(function(cat) {
          return (
            <div key={cat.id} className="column content">

              <h2 className="category-name title is-2">
                {cat.name}
              </h2>
              <Games cat={cat}/>
            </div>
          )
        })}
      </div>
    </div>
    )
  }
})
