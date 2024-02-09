let express = require('express');
let app = express();

require('dotenv').config();

app.get('/', (req, res)  => {
    res.send();
});

app.get('/health', (req, res)  => {
    res.status(200).json({message: 'Service is running'});
});

app.listen(3000, () => {
    console.log(`App listening on port ${process.env.PORT}!`);
});