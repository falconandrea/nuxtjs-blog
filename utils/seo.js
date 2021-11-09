export const createSEOMeta = (data) => [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { hid: 'description', name: 'description', content: data.description },
  { name: 'format-detection', content: 'telephone=no' }
]
