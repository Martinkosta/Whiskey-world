const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const whiskeySchema = new mongoose.Schema({
    whiskeyName: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    brand:{
      type:String
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    likes:{
      type:Number,
      default:0
    },
  description: {
    type:String,
  },
  distilleryLocation: {
    type:String,
  },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Whiskey', whiskeySchema);
