var path = require("path");

module.exports = function (app) {

    //Routes to question
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //routes home if any other url route is passed
    app.get("*", function (req, res) {
        app.get("/survey", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    });
}