const connect = require('connect');
const serveStatic = require('serve-static');

connect()
    .use(serveStatic(`${__dirname}/src`))
    .listen(8080, () => {
        console.log('Server running on http://localhost:8080');
    });