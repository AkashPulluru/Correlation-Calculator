import Stocks from './stocks';
import View from './view';

document.addEventListener('DOMContentLoaded', () => {
    const stock = new Stocks('META');
    const view = new View(stock);
    view.createData();
});