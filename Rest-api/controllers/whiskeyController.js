//const { whiskeyModel } = require('../models');
const whiskeyModel = require('../models/whiskeyModel');
const { newPost } = require('./postController')

function getWhiskeys(req, res, next) {
    whiskeyModel.find()
        .populate('userId')
        .then(whiskeys => res.json(whiskeys))
        .catch(next);
}

function getWhiskey(req, res, next) {
    const { whiskeyId } = req.params;

    whiskeyModel.findById(whiskeyId)
        .populate({
            path : 'posts',
            populate : {
              path : 'userId'
            }
          })
        .then(whiskey => res.json(whiskey))
        .catch(next);
}

function createWhiskey(req, res, next) {
    const { whiskeyName, postText } = req.body;
    const { _id: userId } = req.user;

    whiskeyModel.create({ whiskeyName, userId, subscribers: [userId] })
        .then(whiskey => {
            newPost(postText, userId, whiskey._id)
                .then(([_, updatedWhiskey]) => res.status(200).json(updatedWhiskey))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const whiskeyId = req.params.whiskeyId;
    const { _id: userId } = req.user;
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
}
