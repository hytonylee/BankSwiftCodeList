const request = require('request');
const cheerio = require('cheerio');

request('https://www.bankswiftcode.org/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);
		const distOpt = $('#content');

		$('#content ul li a span').each((index, element) => {
			const option = $(element).text();
			console.log(option);
		});
	}
});
