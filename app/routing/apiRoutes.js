var friends = require("../data/friends");

module.exports = function (app) {

    //Getting the current friends from the friends.js 
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    //Checking the user's score array against friends in friends.js
    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var match = {};
        var ceiling = 999999999;

        //Going through every friend object in friend.js
        friends.array.forEach(friend => {
            var total = 0;

            //Finding difference in score between user and friends
            for (i = 0; i < 10; i++) {
                total += Math.abs(user.scores[i] - friend.scores[i]);
            }

            //Updating the match obj every time a friend with a closer score is found
            if (total < ceiling) {
                ceiling = total;
                match = friend;
            }
        });

        //What we return back to survey.html
        res.json({
            name: match.name,
            pic: match.pic
        });

        //Adding the user's answers to the friends.js
        friends.push(user)
    });
}