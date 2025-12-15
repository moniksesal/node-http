const data = require('./data')

const http = require('node:http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/htmn')
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>${data.title}</title>
        </head>
        <body>
            <h1>${data.title}</h1>
            <h2>${data.subtitle}</h2>
            <p>${data.description}</p>
        </body>
        </html>
        `)
})

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000')
})

