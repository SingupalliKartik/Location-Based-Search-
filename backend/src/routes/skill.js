const express = require("express");
const router = express();
const Register = require("../models/register");
const SportData = require("../models/sportsInterest");

router.get("/sport_data/:id",async(req,res)=>{
    try {
        const id = req.params.id;
     const userdata = await Register.findOne({_id:id});
     const Email = userdata.Email;
     const Name = userdata.Name;
     const sport_data = await SportData.findOne({Email});
     res.status(202).json({Name,sport_data});
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
})
router.post("/sportsDetailForm/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const { GameName,Levels,Location} = req.body;
     const userdata = await Register.findOne({_id:id});
     const Email = userdata.Email;
     const result = await SportData.create({
         GameName,Levels,Location,Email
        })
     console.log(result);
     res.sendStatus(202);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
})

module.exports = router;