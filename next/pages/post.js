import { Layout } from './shared';
import fetch from 'isomorphic-unfetch'

const Post = (props) => {

  return (
  <Layout>
   <h1>{props.post.title}</h1>
   <p>{props.post.body}</p>
  </Layout>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  console.log(`Fetched post: ${post.title}`)
  return { post }
}

export default Post