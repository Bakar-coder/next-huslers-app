const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://134.122.116.30:5000' : 'http://localhost:5000',
  'process.env.NAMESPACE': '',
  'process.env.CLIENT_ID': ''
}
