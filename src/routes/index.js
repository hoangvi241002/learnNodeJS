const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    // app.get('/news', (req, res) => {
    //     return res.render('news');
    // });
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;