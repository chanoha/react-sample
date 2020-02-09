const fetch = require('isomorphic-unfetch')

module.exports = { 
  exportPathMap: async function () {
    console.log("exportPathMap");
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    const ids = posts.map(x => x.id);

    const route = { 
      '/': { page: '/' },
      '/about': { page: '/about' },
    }   

    ids.forEach(id => {
      route[`/p/${id}`] = { page: '/post', query: { id } } 
    })  

    return route
  }
}