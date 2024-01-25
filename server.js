const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://api.qrcode-monkey.com//qr/custom', changeOrigin: true }));

// Rota para o HTML ou outros recursos estáticos
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de proxy rodando na porta ${PORT}`);
});
