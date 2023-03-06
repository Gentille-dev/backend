const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const port = 8000;
const ImageModel = require("../images-models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//connect to mongodb
mongoose
.connect (
  "mongodb+srv://gentille:Nazareth200000@my-brand.is7lph6.mongodb.net/upload-image",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log("mongodb is connnected"))
.catch((err) => console.log(err, "mongodb has an error"));


// set multer storage
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage:Storage 
}).single('testImage')

app.get("/", (req, res) =>{
  res.send("upload file");
});

app.post('/upload', (req,res) =>{
  upload(req, res, (err) =>{
    if(err){
      console.log(err);
    }
    else{
      const newImage = new ImageModel({
        title: req.body.title,
        content: req.body.content,
        image:{
          data:req.file.filename,
          contentType: 'image/png',
        },
      });
      newImage
      .save()
      .then(() => res.send('blog successfully uploaded'))
      .catch((err) => console.log(err));
    
    }
  });
});

app.listen(port, () =>{
  console.log(`successfully running at http://localhost:${port}`);
});




