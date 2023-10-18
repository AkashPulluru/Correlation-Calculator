import Stocks from './stocks';
import View from './view';

document.addEventListener('DOMContentLoaded', () => {
    const stock = new Stocks('GOOG');
    const view = new View(stock);
    view.createData();
});
