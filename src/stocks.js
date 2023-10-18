const axios = require('axios'); 

async function getData() {
    let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=AAPL&apikey=SJRHLXJ8LB105D3F';
    let storedData = null;
    await axios.get(url, {
        headers: { 'User-Agent': 'request' }
    })
    .then(response => {
        storedData = storeData(response.data);
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

    return storedData;
}

async function storeData(data) {
  let storedData = data;
  return storedData
}

async function getPrices() {
    storedData = await getData();
    if (!storedData) return; 

    let closingPrices = {};

    for (let date in storedData["Monthly Time Series"]) {
        closingPrices[date] = storedData["Monthly Time Series"][date]['4. close'];
    }
    console.log(closingPrices);
}

getPrices();






