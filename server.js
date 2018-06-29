const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// bcrypt setup
let bcrypt = require('bcrypt');
const saltRounds = 10;

// jwt setup
const jwt = require('jsonwebtoken');
let jwtSecret = process.env.jwtSecret;
if (jwtSecret === undefined) {
  console.log("You need to define a jwtSecret environment variable to continue.");
  knex.destroy();
  process.exit();
}

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ error: 'No token provided.' });
  jwt.verify(token, jwtSecret, function(err, decoded) {
    if (err)
      return res.status(500).send({ error: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userID = decoded.id;
    next();
  });
}

let listings = [
  {Title: 'Book 1', Author: 'Author 1', Id: 1, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '1:09 PM - 1 Jan 2018'},
  {Title: 'Book 2', Author: 'Author 2', Id: 2, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '12:14 PM - 5 Feb 2018'},
  {Title: 'Book 3', Author: 'Author 3', Id: 3, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '4:19 AM - 1 Jan 2018'},
  {Title: 'Book 4', Author: 'Author 4', Id: 4, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '3:37 PM - 1 Jan 2018'},
  {Title: 'Book 9', Author: 'Author 5', Id: 5, Price: '$50.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '7:53 AM - 1 Jan 2018'},
]

//Login

app.post('/api/login', (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send();
  knex('Users').where('email',req.body.email).first().then(user => {
    if (user === undefined) {
      res.status(403).send("Invalid credentials");
      throw new Error('abort');
    }
    return [bcrypt.compare(req.body.password, user.hash),user];
  }).spread((result,user) => {
    if (result) {
      let token = jwt.sign({ id: user.id }, jwtSecret, {
	       expiresIn: '24h' // expires in 24 hours
      });
      res.status(200).json({user:{email:user.email,fname:user.fname,lname:user.lname,id:user.id},token:token});
    } else {
      res.status(403).send("Invalid credentials");
    }
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});

//Registration

app.post('/api/users', (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.fname || !req.body.lname)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user !== undefined) {
      res.status(403).send("Email address already exists");
      throw new Error('abort');
    }
    return knex('users').where('username',req.body.username).first();
  }).then(user => {
    if (user !== undefined) {
      res.status(409).send("User name already exists");
      throw new Error('abort');
    }
    return bcrypt.hash(req.body.password, saltRounds);
  }).then(hash => {
    return knex('users').insert({email: req.body.email, hash: hash, username:req.body.username,
				 fname:req.body.fname, lname:req.body.lname});
  }).then(ids => {
    return knex('users').where('id',ids[0]).first().select('username','fname','lname','id');
  }).then(user => {
    let token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: '24h' // expires in 24 hours
    });
    res.status(200).json({user:user,token:token});
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});


app.get('/api/testing',(req,res)=> {

  res.status(200).json(listings);
});



app.listen(5000, () => console.log('Server listening on port 5000!'));
