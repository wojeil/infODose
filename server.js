const express = require("express");
const db = require("./models");
const session = require("express-session");
const passport = require("passport");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes)


<<<<<<< HEAD
db.sequelize.sync({force: true}).then(() => {
=======
db.sequelize.sync({force:true}).then(() => {
>>>>>>> 241197a11f21ce523d3214559fda6433197f4047
    app.listen(PORT, () => {
        console.log(`app listening on: http://localhost:${PORT}`);

    })
})