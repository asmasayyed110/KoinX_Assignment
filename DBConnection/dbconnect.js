const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

mongoose.connect("mongodb+srv://asmaasayyed110:FuGcVZ6HB4mO4Khc@cluster0.0ihujj4.mongodb.net/KoinX?retryWrites=true&w=majority&appName=Cluster0", {    //Connecting to the Database 
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )