const prod = {
  url: {
    BASE_URL: "https://api-immo-coin-dev.herokuapp.com",
  }
}

const dev = {
 url: {
  BASE_URL: "http://localhost:3001"
 }
};
console.log(process.env.NODE_ENV)

export const config = process.env.NODE_ENV === "development" ? dev : prod;