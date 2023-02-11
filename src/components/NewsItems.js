import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,descp,imageUrl,newsUrl} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descp}</p>
          <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItems
