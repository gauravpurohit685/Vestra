const {companies} = require("../util/constant");

const marketData = {};

async function initializeMarketData() {

    const requests = companies.map(symbol =>
        fetch(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
        )
    );

    const responses = await Promise.all(requests);

    const quotes = await Promise.all(
        responses.map(response => response.json())
    );

    quotes.forEach((quote, index) => {

        const symbol = companies[index];

        marketData[symbol] = {
            symbol,
            currentPrice: quote.c,
            change: quote.d,
            percentChange: quote.dp,
            high: quote.h,
            low: quote.l,
            open: quote.o,
            previousClose: quote.pc
        };

    });

    console.log("Market initialized successfully!");

}

module.exports = {
    marketData,
    initializeMarketData
};