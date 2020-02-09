import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

const layoutStyle = { 
  margin: 20, 
  padding: 20, 
  border: '1px solid #DDD'
}

export const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export function getRenderedBy() {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
}

export const PostLink = (props) => (
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a style={linkStyle}>{props.title}</a>
    </Link>
)

export default Layout