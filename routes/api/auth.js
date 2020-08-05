const { check , validationResult} = require('express-validator');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');
const Admin = require('../../models/Admin');
const Lawyer = require('../../models/Lawyer');

router.get('/', auth , async (req,res)=>{
    try {
        let user;
        if (req.user.isAdmin) {
            user = await Admin.findById(req.user.id).select('-password');
        }else if(req.user.isLawyer){
            user = await Lawyer.findById(req.user.id).select('-password');
        }else if(!req.user.isAdmin || !req.user.isLawyer){
            user = await User.findById(req.user.id).select('-password');
        }
        res.json(user)       
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})


router.post('/login',
[
    check('email','Please enter a valid Email').isEmail(),
    check('password','Password is require').exists()
]
, async (req,res)=>{
    //errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()})}

    const {email, password, userType } = req.body;
    const adminE = config.get('EM');
   
    try {
        if (adminE === email) {
            let admin = await Admin.findOne({email});
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {return res.status(400).json({errors : [{msg : 'Invalid Password or Emil'}]})}
    
    
            const payload = {
                user:{
                    id :admin.id,
                    isAdmin:true
                }
            }

            
            jwt.sign(payload,
                config.get('jwtSecret'),
                {expiresIn :360000},
                (err,token)=>{
                    if (err) throw err;
                    res.json({token})
                }
                )
                
                
            }else if (userType) {
                let lawyer = await Lawyer.findOne({email});
                if (!lawyer) {return res.status(400).json({errors : [{msg : 'Invalid Password or Emil'}]})}
                
                const isMatch = await bcrypt.compare(password, lawyer.password);
                if (!isMatch) {return res.status(400).json({errors : [{msg : 'Invalid Password or Emil'}]})}
                
                
                const payload = {
                    user:{
                        id :lawyer.id,
                        isLawyer: lawyer.isLawyer
                    }
                }
                

            
            jwt.sign(payload,
                config.get('jwtSecret'),
                {expiresIn :360000},
                (err,token)=>{
                    if (err) throw err;
                    res.json({token})
                }
                )
        }
        else{
            let user = await User.findOne({email});
            if (!user) {return res.status(400).json({errors : [{msg : 'Invalid Password or Emil'}]})}
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {return res.status(400).json({errors : [{msg : 'Invalid Password or Emil'}]})}
            
            
            const payload = {
                user:{
                    id :user.id,
                }
            }
            
            jwt.sign(payload,
                config.get('jwtSecret'),
                {expiresIn :360000},
                (err,token)=>{
                    if (err) throw err;
                    res.json({token})
                }
                )
        }
        }
        catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }


})

module.exports = router;