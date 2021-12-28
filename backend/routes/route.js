const express = require("express");
const router = express.Router();
const user = require("../models/schema")


// router.route('/register').post((req,res)=>{
//     first_name = req.body.first_name,
//     last_name = req.body.last_name
//     email = req.body.email,
//     password = req.body.password,
//     newuser = new user({
//        first_name,
//        last_name,
//        email,
//        password
//    });
//    newuser.save()
// })




// router.get("/getdata",async(req,res)=>{
//     try {
//         const userdata = await user.find();
//         res.status(201).json(userdata)
//         console.log(userdata);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


//  router.get("/getuser/:id",async(req,res)=>{
//      try {
//          console.log(req.params);
//       const {id} = req.params;

//         const userindividual = await user.findById({_id:id});
//         console.log(userindividual);
//         res.status(201).json(userindividual)

//     } catch (error) {
//         res.status(404).json(error);
//     }
// })

router.get('/:id',(req,res)=>{

    try{
        const sqlQuery = 'SELECT id, email, password,first_name,last_name FROM user WHERE id=?'
        const rows =  pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows)
    }catch(error){
        res.status(404).send(error.message)
    }
    res.status(200).json({id:req.params.id})
})

router.post("/register",(req,res)=>{
      try{
          const{email,password} = req.body
          const sqlQuery = 'INSERT INTO user (email,password,first_name,second_name) VALUES (?,?)'
          const result = pool.query(sqlQuery,[email,password])
          res.status(200).json(result)
      }catch(error){
          res.status(404).send(error.message)
      }
})






module.exports = router