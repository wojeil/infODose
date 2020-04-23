const router = require("express").Router();
const db = require("../models");
// // you this file to code your API routes

// // route: /api
router.get("/info/:state/:county/:year", (req, res) => {
    //your code here
    console.log(req.params.state);
    console.log(req.params.county);
    console.log(req.params.year);
    db.odstats.findOne({
        where: {
            state:req.params.state,
            county:req.params.county,
            year:req.params.year
        }
    }).then(function(dbstats){
        res.json(dbstats);
      
    });

});

//route for posting new form 
//route for updating form
//rout for deleting form

//route for seeing forms db


module.exports = router;