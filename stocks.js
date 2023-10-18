const axios = require('axios');

function getData() {
let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=AAPL&interval=5min&apikey=SJRHLXJ8LB105D3F';

axios.get(url, {
    headers: {'User-Agent': 'request'}
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.log('Status:', error.response.status);
    } else if (error.request) {
      console.log('Request failed:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  });
}

