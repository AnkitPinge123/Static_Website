const express = require('express') ;

const app = express() ;

const PORT = 3000 ;



app.use(express.static('Public'))


app.listen(PORT , ()=>{
      console.log("Port is running");
})

