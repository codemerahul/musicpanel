var Track = require('../models/tracks');
var Gener = require('../models/geners');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/tracks', function(req, res){
		Track.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/tracks', function(req, res){
		var post = new Track();
		post.title = req.body.title;
		post.gener = req.body.gener;
		post.rating = req.body.rating;
		
 		post.save(function(err, post){

			if(err) res.send(err);
			console.log(post);
				res.json(post);
			})
	});

	// get a single post
	apiRouter.get('/posts/:id', function(req, res){
		Track.findById(req.params.id, function(err, post){
			if (err) res.send(err);

			res.json(post);
		});
	});
        // get a single post
	apiRouter.post('/parmaltrack', function(req, res){
        console.log(req.body.path)
		Track.findOne({'_id':req.body.path}, function(err, post){
			if (err) return res.send(err);
console.log(post)
			res.json(post);
		});
	});
//        

	// update a post
	apiRouter.post('/get_track', function(req, res){
                //console.log(req.body);
				Track.findById({'_id':req.body.id}, function(err, post){
			    if(err) res.send(err);
			    console.log(post);
		        post.title = req.body.title;
		        //post.gener = req.body.gener;
		        post.rating = req.body.rating;
                
                
			post.save(function(err){
				if(err) res.send(err);
				res.json({ message: 'Track updated!' });
			})
		});
	});
	// delete a post
	apiRouter.post('/deletetrack', function(req, res){
		Track.remove({
			_id: req.body.id
		}, function(err, post){
			if(err) res.send(err);
			res.json({ message: 'Track deleted!' });
		})
	});


//my get function

apiRouter.get('/get_gen', function(req, res){
	Gener.find({}, function(err, post){
		if (err) res.send(err);

		res.json(post);
	});
});
};