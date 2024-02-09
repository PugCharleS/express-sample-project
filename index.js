let express = require('express');
let app = express();

require('dotenv').config();

app.get('/', (req, res)  => {
    res.send();
});

app.get('/health', (req, res)  => {
    res.status(200).json({message: `Service is running on port ${process.env.PORT}`});
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}!`);
});