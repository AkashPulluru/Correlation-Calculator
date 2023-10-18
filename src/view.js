import Stocks from './stocks';

class View {
    constructor(stock){
        this.stock = stock;
        this.storedData = null;
    }

    async createData() {
        this.storedData = await this.stock.getData();
        this.presentData(this.storedData["Monthly Time Series"]);
    }

    presentData(storedData) {
        const prices = document.querySelector('.stocks');
        let ul = document.createElement('ul');
        for (let date in storedData) {
            let li = document.createElement('li');
            li.innerText = `${date}: ${storedData[date]['4. close']}`;
            ul.append(li);
        }

        prices.append(ul);
    }
}

export default View;
