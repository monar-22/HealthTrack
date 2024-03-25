const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./Routers/UserRouter');
const LoginRouter = require('./Routers/LoginRouter');
const AppRouter = require('./Routers/AppointmentRouter')
const SearchRouter = require("./Routers/SearchRouter")
const AuthRouter=require("./Routers/AuthRouter")

const app = express();
app.use(cors())
app.use(express.json())

app.use(router);
app.use(LoginRouter);
app.use(AppRouter);
app.use(SearchRouter)
app.use(AuthRouter)

mongoose.connect("mongodb://127.0.0.1:27017/doctorDatabase")
.then(() => console.log("Connect to DB"))
.catch((err) => console.log(err));


app.listen(4000,() => console.log("server is running"));