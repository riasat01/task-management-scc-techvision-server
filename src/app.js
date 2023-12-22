const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const applyDefaultMiddleWares = require("./middlewares/applyDefaultMiddleWared");
const globalErrorHandler = require("./utils/globalErrorHandler")

// routers
const authRouter = require("./router/authentication/index");
const removeTokenRouter = require("./router/remove-token/index");
const taskRouter = require("./router/task/index");

// apply builtin middlewares
applyDefaultMiddleWares(app);

// authToken
app.use('/jwt', authRouter);
app.use('/logout', removeTokenRouter);


// service routes
app.use('/task', taskRouter);

app.get('/health', (req, res) => {
    res.send('Server is running');
})

app.all('*', (req, res, next) => {
    console.log(req.url);
    const error = new Error(`Can't find the ${req.originalUrl} on this server`);
    error.status = 404;
    next(error);
})

app.use(globalErrorHandler);

// const main = async () => {
//     await connectDB();
//     app.listen(port, () => {
//         console.log(`server is running at port ${port}`);
//     })
// }

// main();

module.exports = app;