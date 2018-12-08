const BASE_URL = (process.env.NODE_ENV === 'development') ? "http://localhost:3002"
: "https://blog-backend-r.herokuapp.com/"
export const GET_POSTS_URL = BASE_URL + "/post"