const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');//Mongoose is needed to translate data in the DB to JS object for using in this application

const Video = require('../models/video');

const db = "mongodb://naseef012:naseefzz09@ds135956.mlab.com:35956/videoplayer";
mongoose.Promise = global.Promise; //this is just to avoid any warnings which mongoose might throw at us
mongoose.connect(db, function(err){
  if(err){
    console.error("Error found!: "+err);
  }
});

/*
  Getting all videos from MongoDB in Json format
*/
router.get('/videos',function(request, response){
  console.log('Get Request API');
  Video.find({})
       .exec(function(error, videos){
         if(error){
           console.log("retrieving videos");
         }else{
           response.json(videos);
         }
       });
});

/*
  Getting videos from MongoDB by their specific id
*/
router.get('/videos/:id',function(request, response){
  console.log('Get Request API by ID');
  Video.findById(request.params.id)//This function finds the video with this id
       .exec(function(error, videos){
         if(error){
           console.log("retrieving specific videos error");
           response.send("retrieving specific videos error");
         }else{
           response.json(videos);
         }
       });
});

/*
  Posting a video on MongoDB
*/
router.post('/video',function(request, response){
  console.log('Posting a video');
  var newVideo = new Video();
  newVideo.title = request.body.title;
  newVideo.url = request.body.url;
  newVideo.description = request.body.description;
  newVideo.save(function(error,insertedVideo){
    if(error){
      console.log('Error saving video');
    }else{
      response.json(insertedVideo);
    }
  });
});

/*
  Updating a video
*/
router.put('/video/:id', function(request,response){
  console.log('Updating a video');
  Video.findByIdAndUpdate(request.params.id,
  {
    $set : {title: request.body.title, url: request.body.url, description: request.body.description}
  },
  {
      new: true //If this was false url would have returned the older version. Now it will return the updated form
  },
  function(error, updatedVideo){
    if(error){
      console.log('update failed');
      response.end('update failed');
    }else{
      console.log('Url updated');
      response.json(updatedVideo);
    }
  })
});

/*
  DELETE a record from MongoDB
*/
router.delete('/video/:id',function(request, response){
  console.log('Deleting record from mongoDb');
  Video.findByIdAndRemove(request.params.id,function(error,deletedVideo){
    if(error){
      response.send('Error deleting video');
    }else{
      console.log('Video deleted');
      response.json(deletedVideo);
    }
  });
});
module.exports = router;
