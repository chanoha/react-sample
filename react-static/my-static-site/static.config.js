import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/blog',
        paths: {
          root: process.cwd(), // プロジェクトのルート
          src: 'src', //ソースフォルダ。index.jsをエントリーポイントに含む必要あり。
          temp: 'tmp', //ビルドで発生する公開しないファイルの置き場。
          dist: 'dist', //本番用出力フォルダ
          devDist: 'tmp/dev-server', //The development scratch directory.
          public: 'public', //The public directory (files copied to dist during build)
          assets: 'dist', //The output directory for bundled JS and CSS
          buildArtifacts: 'artifacts', //The output directory for generated (internal) resources
        },
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
