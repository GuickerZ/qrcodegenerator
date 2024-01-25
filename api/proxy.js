// api/proxy.js
const axios = require('axios');

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    const response = await axios({
      method,
      url: 'https://api.qrcode-monkey.com/qr/custom',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}
