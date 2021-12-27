const express = require("express");
const router = express.Router();
const user = require("../models/schema")


router.route('/register').post((req,res)=>{
    first_name = req.body.first_name,
    last_name = req.body.last_name
    email = req.body.email,
    password = req.body.password,
    newuser = new user({
       first_name,
       last_name,
       email,
       password
   });
   newuser.save()
})




router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await user.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})


 router.get("/getuser/:id",async(req,res)=>{
     try {
         console.log(req.params);
      const {id} = req.params;

        const userindividual = await user.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(404).json(error);
    }
})






// router.delete("/deleteuser/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const deletuser = await user.findByIdAndDelete({_id:id})
//         console.log(deletuser);
//         res.status(201).json(deletuser);

//     } catch (error) {
//         res.status(422).json(error);
//         console.log(error);
//     }
// })


module.exports = router