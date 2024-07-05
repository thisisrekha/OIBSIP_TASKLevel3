const LocalStrategy = require ('passport-local').Strategy
const User = require ("../models/user")
const bcrypt=require ("bcrypt")



function init(passport){
    passport.use(new LocalStrategy({usernameField : 'email'},async (email,password,done)=>{

        //to login check if user exist

     const user = await User.findOne({email : email})
     if (!user){
        return done(null,false, {message:"No user with this email address"})

     }

     bcrypt.compare(password,user.password).then(match =>{
        if(match){
            return done(null, user, {message:"Logged in successfully"})
        }
        return done(null,false,{message:"Wrong Username or password"})

     }).catch(err =>{
        return done(null,false,{message:"Something went wrong"})

     })





        })
    )
    passport.serializeUser((user,done) =>{
        done(null,user._id)

    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => {
                done(null, user); // Passes the user object to the next middleware or route handler
            })
            .catch(err => {
                done(err); // Passes the error to Passport's error handler
            }); 



    })

}
module.exports = init