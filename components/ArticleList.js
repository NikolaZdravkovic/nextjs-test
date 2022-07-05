import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
    // console.log(articles.data)
    return (
        <div className={articleStyles.grid}>
            {articles.data.slice(0, 3).map(article => <ArticleItem key={article.id} article={article} />)}
        </div>
    )
}

export default ArticleList