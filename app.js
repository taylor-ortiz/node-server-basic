const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Greetings!</title></head>')
        res.write('<body><h1>Greetings!!</h1></body>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end();
    }

    if (url === '/users') {
        res.write('<html>')
        res.write('<head><title>Greetings!</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>')
        res.end();
    }

    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('what is the value of parsed body? ', parsedBody);
        })
    }

});

server.listen(3000);