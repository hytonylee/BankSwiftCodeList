const request = require('request');
const cheerio = require('cheerio');

// let linkList = [];
const countries = [
	'united-states',
	'spain',
	'china',
	'canada',
	'japan',
	'indonesia',
	'india',
	'turkey',
	'germany',
	'iran',
	'russia',
	'austraila',
	'brazil',
	'tawian',
	'united-kingdom',
	'poland',
	'france',
	'argentina',
	'italy',
	'netherlands',
	'mexico',
	'soudi-arabia',
	'south-korea',
	'thailand'
];

countries.map(country => {
	request(
		`https://www.bankswiftcode.org/${country}`,
		(error, response, html) => {
			if (!error && response.statusCode == 200) {
				const $ = cheerio.load(html);

				$('table #t2').each((index, element) => {
					const text = $(element).text();
					console.log(text);
				});
			}
		}
	);
});
