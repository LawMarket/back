const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  lawyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lawyer'
  },
  location: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
   bio: {
    type: String
  }, 
  experience: {
    type: String,
    required: true
  },
  workReady:{
    type:String,
  },
  reactTime:{
    type:String
  },
  lawyerKnow:{
    type:String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
  /* social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  }, */
