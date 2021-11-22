export default function ({ $axios, redirect }) {
  const https = require('https')

  $axios.baseURL = process.env.API_URL

  $axios.defaults.timeout = 3000
  $axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  $axios.defaults.headers.referer = process.env.REFERER
  $axios.defaults.httpsAgent = new https.Agent({ keepAlive: true })

  if (process.env.NODE_ENV !== 'production') {
    console.log('baseurl', $axios.baseURL)

    $axios.onResponse(response => {
      console.log(`[${response.status}] ${response.request.path}`)
    })

    $axios.onError(err => {
      console.log(`[${err.response && err.response.status}] ${err.response && err.response.request.path}`)
      console.log(err.response && err.response.data)
    })
  }
}
