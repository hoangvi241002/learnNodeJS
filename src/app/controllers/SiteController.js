
class NewsController {

    //[GET] / news
    home(req, res) {
        res.render('Home');
    }

    //[GET] / news/:slug
    search(req, res) {
        res.render("Search");
    }
}

module.exports = new NewsController;