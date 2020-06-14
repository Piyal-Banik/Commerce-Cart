var express = require('express');
var userRouter = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/user');

var multer = require('multer');
var fs = require('fs-extra');
var path = require('path');
const passport = require('passport');
var authenticate = require('../authenticate');

userRouter.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('Hi');
        var path = `public/images/${req.body.username}`;
        fs.ensureDirSync(path);
        cb(null, path);
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var imageFilter = (req, file, cb) => {
    var ext = path.extname(file.originalname);

    if(ext != '.png' && ext != '.jpg' && ext != '.jpeg') {
        cb(new Error('Only Image can be uploaded'));
    }
    else {
        cb(null, true);
    }
};

var upload = multer({
    storage: storage, 
    fileFilter: imageFilter, 
    limits: 1024*1024*5
});


userRouter.post('/signup', upload.single('image'), (req,res,next) => {
    User.register(new User({username: req.body.username}), req.body.password, (error, user) => {
        if(error) {
            next(error);
        }

        if(req.body.firstname) {
            user.firstname = req.body.firstname;
        }
        if(req.body.lastname) {
            user.lastname = req.body.lastname;
        }

        user.image = req.file.path;

        user.save()
        .then(user => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({sucess: 'Sucess'});
        }, err=> next(err))
        .catch(err => next(err))
    });
});

userRouter.post('/signin', passport.authenticate('local', {failureRedirect: '/login-signup'}), (req,res,next) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({sucess: 'Sucess', token: token, user: req.user});
})

module.exports = userRouter;


