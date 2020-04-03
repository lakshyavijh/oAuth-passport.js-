const express = require('express');
const authRoutes =require('./routes/auth-routes');
const app=express();

//setup view engine
app.set('view engine','ejs');

//setup routes
app.use('/auth',authRoutes);


//create home route
app.get('/',(req,res) => {
    res.render("home");
})

app.listen(3000,function() {
    console.log("App now listeining for requests on 3000");
});