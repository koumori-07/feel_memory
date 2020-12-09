import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from '../reducks/article/selector';
import { ArticleCard } from '../components/Article';
import { fetchArticle } from '../reducks/article/operation';
import { Button } from '@material-ui/core';
import { push } from 'connected-react-router';


const TopPage = () => {
    const selector = useSelector((state) => state);
    const articles = getArticles(selector)
    const dispatch = useDispatch();
    console.log(articles)
    return( 

        <section>
           <Button onClick={() => dispatch(push('/new'))}>新規投稿</Button>
            {articles.length > 0 &&(
                articles.map(article=>(
                    <ArticleCard key={article.id}article={article}/>
                ))
            )}
        </section>
    
    )
}
export default TopPage