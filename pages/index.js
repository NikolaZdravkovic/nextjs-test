import Head from 'next/head'
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  // console.log(articles.data);
  return (
    <div >
      <Head>
        <title>Act digtal website</title>
        <meta name='keywords' content='web dev' />
      </Head>
      <h1>Welcome to Act digital</h1>
      <ArticleList articles ={articles}/>
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`https://act-back.herokuapp.com/api/articles`);
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }

}