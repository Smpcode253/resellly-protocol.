const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Resellly API Live 🚀'));
app.listen(process.env.PORT || 3000);
