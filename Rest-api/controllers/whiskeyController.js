//const { whiskeyModel } = require('../models');
const whiskeyModel = require('../models/whiskeyModel');
const { newPost } = require('./postController')

function getWhiskeys(req, res, next) {
    whiskeyModel.find()
        .populate('userId')
        .then(whiskeys => res.json(whiskeys))
        .catch(next);
}

 function likedWhiskeys(req,res,next){
    const { _id: userId } = req.user;
    console.log(userId)
    whiskeyModel.find({subscribe:userId})
    .then(whiskeys=>res.json(whiskeys))
    .catch(next);
}

function getWhiskey(req, res, next) {
    const { whiskeyId } = req.params;

    whiskeyModel.findById(whiskeyId)
        .populate({
            path: 'posts',
            populate: {
                path: 'userId'
            }
        })
        .then(whiskey => res.json(whiskey))
        .catch(next);
}

function createWhiskey(req, res, next) {
    const { whiskeyName, distilleryLocation, brand, img, description } = req.body;
    const { _id: userId } = req.user;

    whiskeyModel.create({
        whiskeyName,
        brand,
        distilleryLocation: distilleryLocation,
        img,
        description: description,
        userId
    }).then(whiskey => res.status(200).json())
        .catch(next);

}

 async function subscribe(req, res, next) {
    const whiskeyId = req.params.whiskeyId;
    const { _id: userId } = req.user;
   const whiskey= await whiskeyModel.findById(whiskeyId);
   whiskey.likes++;
   await whiskey.save();
  
    whiskeyModel.findByIdAndUpdate({ _id: whiskeyId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedWhiskey => {
            res.status(200).json(updatedWhiskey)
        })
        .catch(next);
}

module.exports = {
    getWhiskeys,
    createWhiskey,
    getWhiskey,
    subscribe,
    likedWhiskeys
}

/*  .then(whiskey => {
            newPost(description, userId, whiskey._id)
                .then(([_, updatedWhiskey]) => res.status(200).json(updatedWhiskey))
        })
        .catch(next);*/