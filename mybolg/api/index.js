var express = require('express');
var router = express.Router();
router.get('/',function(request ,response){



      response.send({message:"欢迎来到Api接口"})

      
})

module.exports = router;