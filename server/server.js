const express = require("express")
const cors = require('cors');
const app = express()


require("./configs/mongoose.config")
app.use(cors({
    orgin: '*',
}));
app.use(express.json(), express.urlencoded({ extended: true }));


app.listen(8000, () => console.log("the server is on port 8000"));