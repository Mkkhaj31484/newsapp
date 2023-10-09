import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import dimage from "../dimage.png";
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);



    // constructor() {
    //     super();
    //     // let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=763a433b417b4a6b8d86658265b83a30";
    //     // let data =fetch(url);
    //     // let parsedata = data.JSON;

    //     // console.log(" this is a constructor from News.js");
    //     this.state = {

    //         articles: this.articles,
    //         loading: false,
    //         page: 1,
    //         totalResults: 0

    //     }
    // }

    const update = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=763a433b417b4a6b8d86658265b83a30&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let dataparse = await data.json();
        setArticles(dataparse.articles);
        setTotalResults(dataparse.totalResults);
        setLoading(false);
    }

    useEffect(() => {

        update();
        //eslint-disable-next-line

    },[]);

    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=763a433b417b4a6b8d86658265b83a30&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let dataparse = await data.json();
    //     this.setState({
    //         articles: dataparse.articles,
    //         totalResults: dataparse.totalResults,
    //         loading: false
    //     });


    // }



    //  nextClick = async()=>{
    //     if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    //       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=763a433b417b4a6b8d86658265b83a30&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //       this.setState({loading:true})
    //        let data =  await fetch(url);
    //        let dataparse =  await data.json();

    //        this.setState({
    //          page: this.state.page+1,
    //          articles:dataparse.articles,
    //          loading:false
    //     })
    //     }

    //  }

    //     prevClick =async()=>{
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=763a433b417b4a6b8d86658265b83a30&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading:true});
    //         let data =  await fetch(url);
    //         let dataparse =  await data.json();
    //         this.setState({
    //             page: this.state.page+1,
    //             articles:dataparse.articles,
    //             loading:false
    //         })
    //  }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=763a433b417b4a6b8d86658265b83a30&page=${page+1}&pageSize=${props.pageSize}`;
        setLoading(true);
        setPage(page + 1);
        let data = await fetch(url);
        let dataparse = await data.json();
        setArticles(articles.concat(dataparse.articles));
        setTotalResults(dataparse.totalResults);
        setLoading(false);
        // this.setState({
        //     articles: this.state.articles.concat(dataparse.articles),
        //     totalResults: dataparse.totalResults,
        //     loading: false
        // });

    }

    const titleCase = (str)=> {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }



    return (

        <>
               
                <div className="text-center" style ={{marginTop:65,marginBottom:20}}>
                    <h1> <strong>Todays Top {titleCase(props.category)} Headlines </strong></h1>
                </div>


                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner/>}
                >

                    <div className="container" style ={{marginLeft:150}}>
                        <div className="row ">

                            {articles.map((element) => {
                                return /*!this.state.loading && */<div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={(element.title)} description={(element.description)} imgurl={element.urlToImage ? element.urlToImage : dimage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
              
            

            {/* <div className="d-flex d-flex justify-content-between">
                    <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevClick}> &larr; Previous</button>
                    <button disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
                    </div> */}
        </>

    )



};

export default News;