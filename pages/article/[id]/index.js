import { useRouter } from "next/router"
import Link from 'next/link'

const artcile = ({ article }) => {
  const articleData = article.data.attributes
  // const router = useRouter();
  // const { id } = router.query

  return (
    <div>
      <h1>{articleData.title}</h1>
      <p>{articleData.description}</p>
      <Link href='/'>Go Back</Link>

    </div>
  )
}

// first solution
// export async function getServerSideProps({query:{id}}) {

//   // console.log(id)
//   const res = await fetch(`https://act-back.herokuapp.com/api/articles/${id}`)
//   const articles = await res.json()
//   // const data = Array.from(articles)
//   // const ids = data.map(article=>article.id)
//   console.log(articles)
//     return {
//      props:{  
//          article:articles.data
//      }
//     }
//   }



export const getStaticProps = async (context) => {
  const res = await fetch(`https://act-back.herokuapp.com/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`https://act-back.herokuapp.com/api/articles`)

  const articles = await res.json();
  // console.log(articles.data)
  const articleData = articles.data;
  const ids = articleData.map(article=>article.id)
  console.log(ids)


 const paths = ids.map(id=>({params:{id:id.toString()}}))
//  console.log(paths)
  return {
    paths,
    fallback:true
  }
}


export default artcile