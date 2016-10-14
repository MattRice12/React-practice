var ObjectList = React.createClass({
  render: function() {
    let hasImg;
    let targName = this.props.obj.name;
    let targImg = this.props.obj.gamepic_url_thumb;

    if (this.props.url === "users") {
      targName = this.props.obj.username;
      targImg = this.props.obj.avatar_url_thumb;
    };

    if (targImg) {
      hasImg = <div className="thumb">
                 <img src={this.props.obj.avatar_url_thumb} alt={this.props.obj.username} title={targName}/>
               </div>
    };

    return (
      <div className="obj-thumb-and-name title is-5">
        {hasImg}
        <h4 className="obj-name">
          <a href={"/" + this.props.url + "/" + this.props.obj.id}>{targName}</a>
        </h4>
      </div>
    )
  }
})
