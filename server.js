const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT2 = 80;
app.use(express.json());
app.use(cors({origin: "*"}))
app.post('/generateQRCode', async (req, res) => {
  const url = 'https://api.qrcode-monkey.com//qr/custom';
  try {
    const response = await axios.post(url, req.body);
    res.json({ imageUrl: response.data.imageUrl });
  } catch (error) {
    console.error('Erro ao gerar QRCode:', error.message);
    res.status(500).json({ error: 'Erro ao gerar QRCode' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT2, () => {
  console.log(`Servidor rodando em http://localhost:${PORT2}`);
});