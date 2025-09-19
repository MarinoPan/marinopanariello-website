const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/app/storie-narrative/:slug.html',
        destination: '/app/storie-narrative/:slug',
      },
      {
        source: '/app/allparty-animation/:slug.html',
        destination: '/app/allparty-animation/:slug',
      },
    ]
  },
}

export default nextConfig
