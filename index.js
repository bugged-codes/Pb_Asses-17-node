const http = require('http');

const server = http.createServer((req, res) => {
	// Sending response header to the request to specify the content type
	res.writeHead(200, { 'Content-Type': 'text/html' });

	// Endpoint for Home page.
	if (req.url === '/') {
		console.log('The home URL is: ', req.url);
		res.write('<h1>This is Home .</h1><br/>');
		res.write('<h3>Different pages on server are as follows: </h3><ul><li>/page-1</li><li>/api</li></ul>');
		res.end();
	}

	// Endpoint for Page-1 for any connection method
	else if (req.url === '/page-1') {
		console.log('Page-1 URL is: ', req.url);
		res.write('<h1>This is Page-1 </h1>');
		res.end();
	}

	// GET Endpoint for api
	else if (req.method === 'GET' && req.url === '/api') {
		console.log('URL for api page with GET is: ', req.url);
		res.write('<h1>This is api Page with <em>GET</em></h1><br/>');
		res.write(JSON.stringify[('API is', 1, 2, (3)[(a, b, c)], (4)['1️⃣, 2️⃣, 3️⃣'])]);
		res.end();
	}
	// POST Endpoint for api
	// else if (req.url === '/api' && req.method === 'POST') {
	// 	let encrypt;
	// 	console.log('URL for api page with POST is: ', req.url);
	// 	res.write('<h1>This is api 📄 with <em>GET</em></h1><br/>');
	// 	req.on('data', (bufferedData) => {
	// 		encrypt = bufferedData;
	// 		console.log('Data Decrypted from Buffer: ' + encrypt.toString('utf8'));
	// 	});
	// 	req.on('end', () => {
	// 		res.end(encrypt);
	// 	});
	// }
});

server.listen(3000, () => console.log('Listening on Port:  3️⃣ 0️⃣ 0️⃣ 0️⃣'));
