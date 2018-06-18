const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

let listings = [
  {Title: 'Book 1', Author: 'Author 1', Id: 1, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '1:09 PM - 1 Jan 2018'},
  {Title: 'Book 2', Author: 'Author 2', Id: 2, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '12:14 PM - 5 Feb 2018'},
  {Title: 'Book 3', Author: 'Author 3', Id: 3, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '4:19 AM - 1 Jan 2018'},
  {Title: 'Book 4', Author: 'Author 4', Id: 4, Price: '$20.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '3:37 PM - 1 Jan 2018'},
  {Title: 'Book 9', Author: 'Author 5', Id: 5, Price: '$50.00', Image: 'https://i.imgur.com/1w6UFY9.jpg', ShortDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.', DatePosted: '7:53 AM - 1 Jan 2018'},
]

// Post a listing to the database



app.get('/api/testing',(req,res)=> {

  res.status(200).json(listings);
});



app.listen(5000, () => console.log('Server listening on port 5000!'));
