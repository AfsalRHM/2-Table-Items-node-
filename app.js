const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const tablePairs = [
        {name: 'Branden', totalMark: 149},
        {name: 'Lilly', totalMark: 186},
        {name: 'Alen', totalMark: 139},
        {name: 'Shibu', totalMark: 199}
    ];
    res.render('tableItems', {tablePairs});
});