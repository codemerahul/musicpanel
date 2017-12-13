var Gener = require('../models/geners');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/geners', function(req, res){
		Gener.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/geners', function(req, res){
		var post = new Gener();
		post.name = req.body.name;
	//	post.slug = req.body.slug;
	//	post.description = req.body.description;
 		post.save(function(err, post){
			if(err) res.send(err);
				res.json(post);
			})
	});

	// get a single post
	apiRouter.get('/posts/:id', function(req, res){
		Post.findById(req.params.id, function(err, post){
			if (err) res.send(err);

			res.json(post);
		});
	});
        // get a single post
	apiRouter.post('/parmal_gen', function(req, res){
        console.log(req.body.path)
		Gener.findOne({'_id':req.body.path}, function(err, post){
			if (err) return res.send(err);
console.log(post)
			res.json(post);
		});
	});
//        

	// update a post
	apiRouter.post('/get_gen', function(req, res){
                //console.log(req.body);
		Gener.findById({'_id':req.body.id}, function(err, post){
			if(err) res.send(err);
			  console.log("eqwe2222");
			  console.log(post);
			  console.log("eqwe");
			  console.log(req.body);
	    	  post.name = req.body.name;
                
			post.save(function(err){
				if(err) res.send(err);
				res.json({ message: 'Genre updated!' });
			})
		});
	});
	// delete a post
	apiRouter.post('/deletegener', function(req, res){
		Gener.remove({
			_id: req.body.id
		}, function(err, post){
			if(err) res.send(err);
			res.json({ message: 'Genre deleted!' });
		})
	});
};