import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import { Layout, PostLink } from './shared'

const Index = (props) => (
  <Layout>
    <p>This is the index page</p>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json()

  console.log(`posts count: ${posts.length}`)

  return { posts }
}

export default Index