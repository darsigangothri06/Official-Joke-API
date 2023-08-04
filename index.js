const express = require("express");
const app = express();
const jokeRoutes = require("./jokeRoute");
const port = 8000;

app.use(express.json())
app.use('', jokeRoutes);

app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`App running on port ${port}`);
})