const request = require('request');
const cheerio = require('cheerio');

request('https://www.bankswiftcode.org/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		console.log('Here is HTML: ' + html);
	}
});
