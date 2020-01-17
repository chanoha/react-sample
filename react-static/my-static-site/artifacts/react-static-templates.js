

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/404.js'
      
const t_1 = universal(import('/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/about.js'
      
const t_2 = universal(import('/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/blog.js'), universalOptions)
      t_2.template = '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/blog.js'
      
const t_3 = universal(import('/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/index.js'), universalOptions)
      t_3.template = '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/index.js'
      
const t_4 = universal(import('/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/containers/Post'), universalOptions)
      t_4.template = '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/containers/Post'
      

// Template Map
export default {
  '/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/404.js': t_0,
'/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/about.js': t_1,
'/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/blog.js': t_2,
'/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/index.js': t_3,
'/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/Users/takashi/Documents/design/github/chanoha.github.io/react-static/my-static-site/src/pages/404.js"

