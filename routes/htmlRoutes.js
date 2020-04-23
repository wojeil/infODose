const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");


// user authorized views
router.get("/", auth, (req, res) => res.render("login"));
//router.get("/user/info", auth, (req, res) => res.render("info"));
router.get("/report", auth, (req, res) => res.render("report"));

// login and register forms view
router.get("/user/login", (req, res) => res.render("login"));
router.get("/user/register", (req, res) => res.render("register"));
//var db = require("../models");


  // Load index page
  //router.get("/", function(req, res) {
    //db.odstats.findAll({}).then(function(stats) {
      //res.render("index", {
       // msg: "Welcome!",
        //odstats: stats
      //});
  //});
//});



// router.get("/user/:email", function(req, res) {
//   db.user.findAll({ where: { email: req.params.email } }).then(function(dbUser) {
//     console.log(req.params.email);
//     res.render("user", {
//       user: dbUser
//     });


//});

//html rout forgetting user to main page  for ---testing--- 
router.get("/info", auth, function (req, res) {
  //   // db.user.findAll({ where: { } }).then(function(dbUser) {
  //   //   console.log("--------------------------------------------------");
  //   //   console.log(req.params.email);
  res.render("info", {
    //       // user: dbUser
    //     // });
  });
});

//router.get("/user/register", function (req, res) {
  // db.user.findAll({ where: { } }).then(function(dbUser) {
  //   console.log("--------------------------------------------------");
  //   console.log(req.params.email);
  //res.render("register", {
    // user: dbUser
    // });
  //});
//});

// router.get("/user/:email", function(req, res) {
//   db.user.findAll({ where: { email: req.params.email } }).then(function(dbUser) {
//     console.log("--------------------------------------------------");
//     console.log(req.params.email);
//     res.render("user", {
//       user: dbUser
//     });
//   });
// });


// router.get("/odstats/:id", function(req, res) {
//   db.odstats.findOne({ where: { id: req.params.id } }).then(function(
//     dbStats
//   ) {
//     res.render("odstats", {
//       odstats: dbStats
//     });
//   });
// });

// Render 404 page for any unmatched routes
// router.get("*", function(req, res) {
//   res.render("404");
// });

module.exports = router;