const express = require('express');
const { check , validationResult} = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Lawyer = require('../../models/Lawyer');


router.post('/',
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


    const {firstName, lastName, email, password, phoneNumber} = req.body;

    try {
        let lawyer = await Lawyer.findOne({ email });
        if (lawyer) {return res.status(400).json({errors : [{msg : 'lawyer alredy exitst'}]})}

        //profile picture
        const avatar = gravatar.url(email,{
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        //create user
        lawyer = new Lawyer({
            firstName,
            lastName,
            email,
            phoneNumber,
            avatar,
            password
        });

        //crypt the password
        const salt = await bcrypt.genSalt(10);
        lawyer.password = await bcrypt.hash(password,salt);
        await user.save();
      

        const payload = {
            user:{id :lawyer.id}
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


module.exports = router;