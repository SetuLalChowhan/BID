const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb://localhost:27017/bid', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;