const express = require("express");
const config = require('config');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require("../../middleware/auth");
const adminAuth = require("../../middleware/adminAuth");
const { check, validationResult } = require("express-validator");

const ProfileModel = require("../../models/Profile");
const Lawyer = require("../../models/Lawyer");
const PostModel = require("../../models/Post");


router.get("/me", auth, async (req, res) => {
  try {
    const profile = await ProfileModel.findOne({ lawyer: req.user.id }).populate(
      "lawyer",
      ["firstName", "lastName"]
      );
  
    if (!profile) {
      return res.status(400).json({ msg: "There in no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


router.get("/me/:lawyer_id" ,async (req, res) => {
  try {
    let lawyer = mongoose.Types.ObjectId(req.params.lawyer_id); 

    const profile = await ProfileModel.findOne({lawyer: lawyer}).populate(
      "lawyer",
      ["firstName", "lastName"]
      );
  
    if (!profile) {
      return res.status(400).json({ msg: "There in no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});



router.post(
  "/",
  [
    auth,
    [
      check("skills", "Skills is require")
        .not()
        .isEmpty(),
        check("location", "location is require")
        .not()
        .isEmpty(),
        check("bio", "bio is require")
        .not()
        .isEmpty(),
        check("experience", "experience is require")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      lawyerKnow,
      location,
      bio,
      skills,
      experience,
      workReady,
      reactTime
    } = req.body;

    let profileFields = {};
    profileFields.lawyer = req.user.id;
    if (lawyerKnow) profileFields.lawyerKnow = lawyerKnow;
    if (experience) profileFields.experience = experience;
    if (workReady) profileFields.workReady = workReady;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (reactTime) profileFields.reactTime = reactTime;
    if (skills) {
      profileFields.skills = skills.split(",").map(skill => skill.trim());
    }

   
    try {
      let profile = await ProfileModel.findOne({ lawyer: req.user.id });
      //update
      if (profile) {
        profile = await ProfileModel.findOneAndUpdate(
          { lawyer: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/allProfiles", async (req, res) => {
  try {
    const profiles = await ProfileModel.find().populate("lawyer", [
      "firstName",
      "lastName",
      "profileImage"
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/lawyer/:lawyer_id", async (req, res) => {
  try {
    const profile = await ProfileModel.findOne({
      lawyer: req.params.lawyer_id
    }).populate("user", ["firstName", "lastName", "profileImage"]);

    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});




router.delete('/', auth, async (req, res) => {
  try {
    
    await ProfileModel.findOneAndRemove({ lawyer: req.user.id });
    // Remove user
    await Lawyer.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
