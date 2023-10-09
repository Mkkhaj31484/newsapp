import React from "react";
const NewsItem =(props)=>{
    
      let {title,description,imgurl,newsurl,author,date} = props; 

        return(

            <div className="card" style={{width: "18rem"}}>
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">By {author?author:"unknown"} on {new Date(date).toGMTString()}</p>
              <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>

//  API KEY 763a433b417b4a6b8d86658265b83a30
        )

}
export default NewsItem;