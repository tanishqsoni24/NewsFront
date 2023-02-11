import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class Newsbox extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=801a39ed96ca4948a76ddb202a081209&page=1&pageSize=5";
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
  }

  prevbtn= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=801a39ed96ca4948a76ddb202a081209&page=${this.state.page-1}&pageSize=5`;
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page:this.state.page - 1,
      articles: parsedData.articles,
    })
  }
  
  nextbtn= async ()=>{
    if(Math.ceil(this.state.page>this.state.totalResults/5)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=801a39ed96ca4948a76ddb202a081209&page=${this.state.page+1}&pageSize=5`;
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page:this.state.page + 1,
        articles: parsedData.articles,
      })
    }
  }

  render() {
    return (
      <>
      <div className="container my-3">
        <h3>Top Headlines</h3>
        <div className="row my-3">
        {this.state.articles?.map((element)=>{
          return <div key={element.url} className="col-md-4 my-3">
            <NewsItems
              title={element.title?element.title.slice(0,45):""}
              descp={element.description?element.description.slice(0,88):""}
              imageUrl={element.urlToImage?element.urlToImage:"https://knowablemagazine.org/pb-assets/knowable-assets/article-assets/twitter/10.1146/knowable-011223-1-1200x630-1673564287437.jpg"}
              className="card-img-top"
              newsUrl = {element.url}
            />
          </div>
        })}
        </div>
      </div>

      <div className="container d-flex justify-content-between">
        <button type="button" className="btn prev" disabled={this.state.page<=1} onClick={this.prevbtn}>&larr; Previous</button>
        <button type="button" className="btn next" disabled={Math.ceil(this.state.page>this.state.totalResults/5)}  onClick={this.nextbtn}>Next &rarr;</button>
      </div>
      </>
    );
  }
}

export default Newsbox;