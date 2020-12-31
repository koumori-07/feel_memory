import { useDispatch, useSelector } from "react-redux";
import { getArticles } from '../reducks/article/selector';
import { ArticleCard } from '../components/Article';
import { useEffect } from "react";
import { fetchArticle } from "../reducks/article/operation";
import Header from "../components/Header/Header";
import Weather from "../components/Weather";
import { getUserId } from "../reducks/users/selector";


const TopPage = () => {
    const selector = useSelector((state) => state);
    const articles = getArticles(selector)
    const uId = getUserId(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticle(uId))
    }, [dispatch]);
    
    return (
        <>
            <Header />
            <div className="main-container">
                <section>
                    {articles.length > 0 && (
                        articles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))
                    )}
                </section>
            </div>
        </>
    )
}
export default TopPage