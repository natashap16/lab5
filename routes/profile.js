var data = require("../data.json");

exports.seeFriend = function(req, res) {   
	var who = req.params.name;
	console.log("Look at " + who  + "'s profile."); 

	res.render('profile', {
		'profileName': who
	});
 }