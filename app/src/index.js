const os = require('os');
const http = require('http');
const crypto = require("crypto");

const uid = crypto.randomBytes(16).toString("hex");
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    const msg = {
        uid: uid,
        date: new Date().toString(),
        request: {
            method: req.method,
            headers: req.headers,
        },
        system: {
            hostname: os.hostname(),
            uptime: os.uptime(),
        }
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(msg, null, 2));
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})