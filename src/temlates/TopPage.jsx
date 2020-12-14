import { useDispatch, useSelector } from "react-redux";
import { getArticles } from '../reducks/article/selector';
import { ArticleCard } from '../components/Article';
import { useEffect } from "react";
import { fetchArticle } from "../reducks/article/operation";


const TopPage = () => {
    const selector = useSelector((state) => state);
    const articles = getArticles(selector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticle())
      }, []);
    return (
        <div className="main-container">
            <section>
                {articles.length > 0 && (
                    articles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))
                )}
            </section>
        </div>
    )
}
export default TopPage