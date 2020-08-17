const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? '' : 'http://localhost:5000',
  'process.env.NAMESPACE': '',
  'process.env.CLIENT_ID': ''
}