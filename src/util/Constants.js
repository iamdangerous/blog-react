const BASE_URL = (process.env.NODE_ENV === 'development') ? "http://localhost:3002"
: "https://blog-backend-r.herokuapp.com"
console.log(process.env.NODE_ENV)
export const GET_POSTS_URL = BASE_URL + "/post"
export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];