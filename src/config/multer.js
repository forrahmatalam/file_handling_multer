const multer = require('multer');


       //DiskStorage for local 
// const storage = multer.diskStorage({

//     destination: (req, file, cb) => {
//         cb(null, "uploads");
//     },

//     filename: (req, file, cb) => {

//         console.log("in file name " + file.originalname);

//         cb(null, Date.now() + "-" + file.originalname);
//     }

// });


     //Disk storage for server 
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});

module.exports = upload;