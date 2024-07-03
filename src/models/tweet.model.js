const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxlength: 250
  },
  image: {
    type: String
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  hashtags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hashtag'
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;