export default {
  baseUrl: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000",
  dbUrl: process.env.DB_CONN ?? "mongodb://localhost:27017",
  pages: {
    index: "/",
  },
  api: {
    restaurants: {
      index: "/api/restaurants",
    },
    boroughs: {
      index: "/api/categories/boroughs",
    },
    cuisines: {
      index: "/api/categories/cuisines",
    },
    neighborhoods: {
      index: "/api/categories/neighborhoods",
    }
  },
}

