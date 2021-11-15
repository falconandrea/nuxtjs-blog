export default function ({ $axios, redirect }) {
  const https = require('https')

  $axios.baseURL = process.env.API_URL
  $axios.defaults.timeout = 3000
  $axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  $axios.defaults.httpsAgent = new https.Agent({ keepAlive: true })
}
