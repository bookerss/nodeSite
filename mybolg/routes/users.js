var express =require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("老子是users");
  })
router.get('/:name',function(req,res){
  res.send('hello,'+req.params.name+'老大');
})
module.exports = router;