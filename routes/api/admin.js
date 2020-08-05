const { check , validationResult} = require('express-validator');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth')

const Admin = require('../../models/Admin');
const User = require('../../models/User');
const Lawyer = require('../../models/Lawyer');
const Profile = require('../../models/Profile');



router.get("/me/:lawyer_id", async (req, res) => {
    try {
      //let lawyer = mongoose.Types.ObjectId();   
      const profile = await Profile.findOne({lawyer:req.params.lawyer_id}).populate(
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
  
  

router.get("/edit-by-id/:lawyer_id", async (req, res) => {
    try {
      const profile = await Profile.findOne({ lawyer: req.params.lawyer_id });
      if (!profile) {
        return res.status(400).json({ msg: "אין פרופיל למשתמש הזה" });
      }
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });


  router.post(
    "/update/:lawyer_id",
    [
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
      ],
      auth
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
      profileFields.lawyer = req.params.lawyer_id;
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
        let profile = await Profile.findOne({ lawyer: req.params.lawyer_id });
        //update
        if (profile) {
          profile = await Profile.findOneAndUpdate(
            { lawyer: req.params.lawyer_id },
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
  


router.post('/create-admin',
[
    check('email','Please enter a valid Email').isEmail(),
    check('password','Please enter a password with 6 charactters').isLength({min: 6})
]
, async (req,res)=>{
    //errors
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()})}

    
    const {email, password, isAdmin} = req.body;

    try {
        let admin;
        //create user
        admin = new Admin({
            email,
            password
        });

        //crypt the password
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password,salt);
        await admin.save();
      

        const payload = {
            user:{
                id :admin.id,
                isAdmin: isAdmin
            }
        }

        jwt.sign(payload,
           config.get('jwtSecret'),
           {expiresIn :360000},
           (err,token)=>{
            if(err) throw err;
            res.json({token})
           }
            )
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }

})

router.post('/create-lawyer',
[
    check('firstName' , 'First Name is requierd').not().isEmpty(),
    check('lastName' , 'Last Name is requierd').not().isEmpty(),
    check('email','Please enter a valid Email').isEmail(),
    check('password','Please enter a password with 6 charactters').isLength({min: 6}),
    check('phoneNumber','Please enter a phone number with 10 charactters').isLength({min: 10})

]
, async (req,res)=>{
    //errors
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()})}


    const {firstName, lastName, email, password, lawyerPic, phoneNumber, isLawyer} = req.body;

    try {
        let lawyer = await Lawyer.findOne({ email });
        if (lawyer) {return res.status(400).json({errors : [{msg : 'lawyer alredy exitst'}]})}

        //profile picture
        
        //create user
        lawyer = new Lawyer({
            firstName,
            lastName,
            email,
            phoneNumber,
            lawyerPic,
            password,
            isLawyer
        });

        //crypt the password
        const salt = await bcrypt.genSalt(10);
        lawyer.password = await bcrypt.hash(password,salt);
        await lawyer.save();
      

        const payload = {
            user:{
                id :lawyer.id,
                isLawyer:isLawyer
            }
        }

        jwt.sign(payload,
           config.get('jwtSecret'),
           {expiresIn :360000},
           (err,token)=>{
            if(err) throw err;
            res.json({token})
           }
            )
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }

})


router.delete('/:user_id', auth, async (req, res) => {
    try {
      await User.findOneAndRemove({ _id: req.params.user_id });
      res.json({ msg: 'User deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


router.delete('/lawyer/:user_id', auth, async (req, res) => {
    try {
      await Lawyer.findOneAndRemove({ _id: req.params.user_id });
      await Profile.findOneAndRemove({ lawyer: req.params.user_id });
      res.json({ msg: 'Lawyer deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

router.get('/allUsers',
async (req,res) =>{
    try {
        let users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
      res.status(500).send('Server Error');
    }
  
});

router.get('/allLawyers', 
async (req,res) =>{
    try {     
        const lawyers = await Profile.find({}).populate("lawyer", [
            "firstName",
            "lastName",
            "profileImage",
            "date",
            "email",
            "phoneNumber"
          ]);
          console.log(lawyers)
        res.json(lawyers);
    } catch (err) {
        console.error(err.message);
      res.status(500).send('Server Error');
    }
});



module.exports = router;