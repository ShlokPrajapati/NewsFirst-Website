import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const update = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=46637f02e70443258debb25e4905f17d&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(75);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        update();
        document.title = `${capitalFirst(props.category)}`
    }, [])
    const fetchMoreData = async () => {
        const
         url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=46637f02e70443258debb25e4905f17d&page=${page+1}&pageSize=${props.pageSize}    `;
        setPage(page + 1)
        console.log(props.country)
        console.log(props.pageSize)
        console.log(page)
        console.log(props.category)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <>
            
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}> {capitalFirst(props.category)} News</h1>
            
            {
            loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles && articles.length}
                next={fetchMoreData}
                hasMore={articles && articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles && articles.filter(article => article.title !== "[Removed]").map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                {/* {console.log(element.title)} */}
                                <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://images.cnbctv18.com/wp-content/uploads/2023/06/2023_6img27_Jun_2023_PTI06_27_2023_000227B-1019x573.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 4,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News