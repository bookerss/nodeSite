var express =require('express');
var router = express.Router();
router.get('/',function(req,res){
  // res.send('您好！世界啊');
  res.json({
    'fuck':"我是一个数据"
  })
  // res.xhr({'AJAX':"我是一个ajax"})
})
module.exports = router;