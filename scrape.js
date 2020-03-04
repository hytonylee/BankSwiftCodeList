const request = require('request');
const cheerio = require('cheerio');

request('https://www.bankswiftcode.org/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);
		const distOpt = $('#content');

		$('#content ul li a').each((index, element) => {
			// const option = $(element).text();
			const link = $(element).attr('href');
			console.log(link);
		});
	}
});
