import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from '../reducks/article/selector';
import { ArticleCard } from '../components/Article';
import { fetchArticle } from '../reducks/article/operation';


const TopPage = () => {
    const selector = useSelector((state) => state);
    const articles = getArticles(selector)
    console.log(articles)
    return( 

        <section>
            {articles.length > 0 &&(
                articles.map(article=>(
                    <ArticleCard key={article.id}article={article}/>
                ))
            )}
        </section>
    
    )
}
export default TopPage