const express = require('express');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Keys = require("./config/Keys");

const app = express();

passport.use(
    
    new GoogleStrategy( 
        {
        clientID: Keys.googleClientID,
        clientSecret: Keys.googleClientSecret,
        callbackURL: '/auth/google/callback', 
        proxy: true
        }, 
        (accessToken) =>{
            console.log(accessToken);
        }
    ),

    
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
        }
    )
);

// app.get('/', (req, res) =>{
//     res.send({"hi": "there"});
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT);
