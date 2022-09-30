/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source:"/old-blog/:path*",
        destination:"/new-sexy-blog/:path*",
        permanent:false,
      }
    ]
  },
  async rewrites(){
    return [
      {
        source:"/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        // :id동일하게
        source:"/api/movies/:params",
        destination: `https://api.themoviedb.org/3/movie/:params?api_key=${API_KEY}&language=en-US`
      }
    ]
  }
}

module.exports = nextConfig
