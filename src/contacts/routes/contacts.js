var express = require('express');
var router = express.Router();
var i = -1;
var data = [];
//var fs = require('fs');
/* GET contacts */
router.get('//:id',function(req,res,next)
{
    res.json(data[(data.length)-1])
});
router.get('/:id', function (req, res, next)
{
    res.json(data[req.params.id]);
    
});
router.post('/messages/:id', function (req, res, next) {
    
    var message = req.params.message;
   data.push(message);
 //  data[parseInt(req.params.id)].message = req.body.message;
 //  console.log(data[parseInt(req.params.id)].message);
  //  console.log(req.body);
    res.json(data[(data.length)-1]);

});

   router.post('/', function(req, res, next)
    {
      
       console.log(req.get('contacts_url'));
      
       i++;
       
         data.push(req.body);
       //  var string=JSON.STRINGFY(req.body);
       //  fs.WriteFile("C:\Users\\pc\\mrnd-nodejs-master\\src\\Contacts\\data"+i+"-Contact.json"+string+err+func(err)
         // {if(err) throw err});
        res.json(i);
    
      console.log(req.body);
});

   router.put('/:id', function (req, res, next)
   {
        
       data[req.params.id].firstName = req.body.firstName;
       res.send(data[req.params.id]);
       console.log(req.body);

   });
 
    

    module.exports = router;

