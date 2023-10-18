import { select, scaleLinear, scaleUtc, extent, max, axisBottom, axisLeft, line as d3Line, create } from 'd3';


class View {
    constructor(stock) {
        this.stock = stock;
        this.storedData = null;
    }

    async createData() {
        this.storedData = await this.stock.getData();
        this.presentData(this.storedData["Monthly Time Series"]);
    }

    presentData(storedData) {
        const stockData = [];
        for (let date in storedData) {
            stockData.push({
                date: new Date(date),

                //note to self: put the + in here to ensure that the value returns as a number 
                price: +storedData[date]['4. close']
            });
        }

        const container = select("#d3-container");

        const width = 500;
        const height = 500;
        const marginTop = 20;
        const marginRight = 20;
        const marginBottom = 30;
        const marginLeft = 20;

        const x = scaleUtc()
            .domain(extent(stockData, d => d.date))
            .range([marginLeft, width - marginRight]);

        const y = scaleLinear()
            .domain([0, max(stockData, d => d.price)])
            .range([height - marginBottom, marginTop]);

        const svg = create("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("g")
            .attr("transform", `translate(0, ${height - marginBottom})`)
            .call(axisBottom(x));

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(axisLeft(y));

            const line = d3Line()
            .x(d => x(d.date))
            .y(d => y(d.price));
        svg.append("path")
            .datum(stockData)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1.5)
            .attr("d", line);

        container.append(() => svg.node());
    }
}

export default View;

