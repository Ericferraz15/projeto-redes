const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? './index.html' : '.' + req.url;
    
    // Identifica qual é a extensão do arquivo
    const extname = String(path.extname(filePath)).toLowerCase();
    
    // Dicionário de tipos de conteúdo para o navegador entender o que está recebendo
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Lê e entrega o arquivo
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Erro 404: Arquivo nao encontrado.');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor de teste rodando na porta http://localhost:3000');
});