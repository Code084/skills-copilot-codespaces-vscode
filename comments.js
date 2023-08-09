// Create web server
var express = require('express');
var router = express.Router();

// Import mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost:27017/mean-demo');

// Create schema
var commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

// Create model
var Comment = mongoose.model('Comment', commentSchema);

// Create route for get comments
router.get('/', function(req, res, next) {
    Comment.find(function(err, comments) {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});

// Create route for post comments
router.post('/', function(req, res, next) {
    var newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });

    newComment.save(function(err, comment) {
        if (err) {
            console.log(err);
        } else {
            res.json({msg: 'Comment added successfully'});
        }
    });
});

// Export module
module.exports = router;
