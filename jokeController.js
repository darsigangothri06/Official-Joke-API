const axios = require("axios");

exports.getAJoke = async(req, res) => {
    try{
        console.log("Hello")
        const response = await axios({
            method: "GET",
            url: "https://official-joke-api.appspot.com/random_joke"
        });
        console.log(response);
        if(!response){
            res.status(400).json({
                message: "failed"
            });
        }
        res.status(200).json({
            message: "success",
            data: response.data
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: "failed",
            data: err
        })
    }
}