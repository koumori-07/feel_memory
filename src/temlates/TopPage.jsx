import { useSelector } from "react-redux";
import { getArticles } from '../reducks/article/selector';
import { ArticleCard } from '../components/Article';


const TopPage = () => {
    const selector = useSelector((state) => state);
    const articles = getArticles(selector)
    console.log(articles)
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