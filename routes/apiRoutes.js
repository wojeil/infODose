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


//route for updating form
//rout for deleting form
router.delete("/report/:id", function(req, res) {
    db.Report.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReport) {
      res.json(dbReport);
      window.location.reload()
    });
  });
//route for posting new form 
router.post("/newreport", (req, res)=>{
console.log("posting to report table");
console.log(req.body);
  db.Report.create({
    organization: req.body.organization,
    report: req.body.report,
    UserId: req.body.UserId

  })
  .then(dbReport=>{
    res.send(dbReport)
  })
})
//rout for showing info (Get)
router.get("/allreports", (req, res) => {
    //your code here
  
    db.Report.findAll({
        limit: 10
    }).then(function(dbreports){
        
        res.json(dbreports);
      
    });

});
module.exports = router;