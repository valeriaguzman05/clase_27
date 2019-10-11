const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.post("/users",function(req, res) { 
    res.status(200).json({
        result: "success",
        status: 200
    });
});

app.listen(3000, () => { 
    console.log("server is running on port 3000");
});

