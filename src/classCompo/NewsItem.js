import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, source, author } = props
    return (
    <>
        <div>
            <div className="card my-3"  style={{height:"35rem" }}>
                <span className="position-absolute badge rounded-pill bg-dark" style={{ display: 'flex', right: 0 }}>
                    {source}
                </span>
                <img src={imageUrl} style={{height:"15rem"}} className="card-img-top" alt="..." />
                <div className="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div><h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.substring(0, 150)}...
                    <a href={newsUrl} style={{fontWeight:"bold",color:'black',textDecoration:"none"}}>  Read more</a></p>
                    </div>
                    <br></br>
                    <div><p className="card-text" ><small className="text-body-secondary">By <span style={{color:"black",fontWeight:600}}>{author ? author : 'Unknown'}</span> on <span style={{color:"black",fontWeight:600}}>{new Date(date).toUTCString()}</span></small></p>
                </div></div>
            </div></div>
    </>
    )

}

export default NewsItem