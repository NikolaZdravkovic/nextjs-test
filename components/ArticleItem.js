import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'


const ArticleItem = ({article})=> {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.attributes.title} &rarr;</h3>
        <p>{article.attributes.description}</p>
      </a>
    </Link>
  )
}

export default ArticleItem