const LocalStrategy     = require('passport-local').Strategy
const User              = require('../models/user')


module.exports = (passport) =>{


// used to serialize the user for the session
passport.serializeUser((user, done) => {
    done(null, user.id)
})

// // used to deserialize the user
passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})



passport.use('local-signup', 
    new LocalStrategy(
    {
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },

    function(req, email, password, done){

       User.findOne({ 'local.email' :  email }, function(err, user) {
            if(err){
                return done(err)
            }

            if(user){
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            }else{

                   var newUser = new User()
                   newUser.local.email = email
                   newUser.local.password = newUser.generateHash(password)

                   newUser.save(function(err){
                    if(err){
                        throw err;
                    }
                    return done(null, newUser)
                   })
            }
       })

    }

))


// Login strategy local

// passport.use('local-login', new LocalStrategy(

// {
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// },

// function(req, email, password, done){
//     User.findOne({ 'local.email': email }, (err, user) => {
//         if(err){
//             return done(err)
//         }

//         if(!user){
//             return done(null, false, req.flash('loginMessage', 'No user found.'))
//         }

//         if(!user.validPassword(password)){
//             return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'))
//         }

//         return done(null, user)
//     })
// }

// ))


}