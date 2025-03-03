const express = require("express")
const connectDB = require("./config/db")
const app = express();
const productRoute = require("./routes/product/product");
const cartRoute = require("./routes/cart/addToCart");
const userRoute = require("./routes/user/user")
const userIdRoute = require("./routes/user/user")
const deleteUserIdRoute = require("./routes/user/user")
const signInRoute = require("./routes/user/user")
const cors = require("cors")


require("dotenv").config()

// app.listen(4000, () => {
//     console.log("running");
     
// })

connectDB();
app.use(cors());

app.use(express.json());
app.use('/api', productRoute)
app.use('/api', cartRoute)
app.use('/api', userRoute)
app.use('/api', userIdRoute)
app.use('/api', deleteUserIdRoute)
app.use('/api', signInRoute)

app.listen(process.env.PORT, () => {
    console.log(`running ${process.env.PORT}`);   
})

