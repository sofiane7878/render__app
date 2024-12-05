const express = require('express');
var app = express();

app.get('/API/:code', (req, res) => {
    res.setHeader('content-type', 'application/json');
    var infos = {
        name: 'Express',
        email: 'malek_ensi@yahoo.fr',
        code: req.params.code
    };
    res.end(JSON.stringify(infos));
});

app.listen(3000, () => {
    console.log('Server Started ..');
});
