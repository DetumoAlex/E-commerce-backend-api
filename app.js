const express = require("express")
const connectDB = require("./config/db")
const app = express();
const productRoute = require("./routes/product/product");
const cartRoute = require("./routes/cart/addToCart");

require("dotenv").config()

// app.listen(4000, () => {
//     console.log("running");
    
// })

connectDB();


app.use(express.json());
app.use('/api', productRoute)
app.use('/api', cartRoute)

app.listen(process.env.PORT, () => {
    console.log(`running ${process.env.PORT}`);   
})

