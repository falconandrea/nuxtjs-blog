export default function ({ $axios, redirect }) {
  $axios.baseURL = process.env.API_URL
  $axios.onRequest(config => {
    require('axios-debug-log')
    config.headers.common['Content-Type'] = 'application/json'
    $axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
  })
}
