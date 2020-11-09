const router = require('express').Router();
const crypto = require("crypto")
const uploads= []

router.post("/form", (req,res)=>{

});
router.get("/upload/:id", (req, res) => {
    // what to write here
    // console.log(req.params.id);
    const foundUpload= uploads.find(upload => upload.id === req.params,id);
    return res.send({data: foundUpload });
});


router.post("/uploads", (req, res) => {
    const id= crypto.randomBytes(18).toString("hex");
    uploads.push({...req.body,id})
    console.log(uploads);
    return res.send({ id });
});

module.exports = router;