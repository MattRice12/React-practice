var ObjectList = React.createClass({
  render: function() {
    let hasImg;
    let canDelete;
    let targName = this.props.obj.name;
    let targImg = this.props.obj.gamepic_url_thumb;
    let currentUser = this.props.currentUser;

    if (this.props.url === "users") {
      targName = this.props.obj.username;
      targImg = this.props.obj.avatar_url_thumb;
    };

    if (targImg) {
      hasImg = <div className="thumb">
                 <img src={targImg} alt={targName} title={targName}/>
               </div>
    };

    if (currentUser.admin === true) {
      canDelete = <Delete obj={this.props.obj}
              url={this.props.url}/>;
    }

    return (
      <div className="obj-thumb-and-name title is-5">
        {hasImg}
        <h4 className="obj-name">
          <a href={"/" + this.props.url + "/" + this.props.obj.id}>{targName}</a>
        </h4>
        {canDelete}
      </div>
    )
  }
})
