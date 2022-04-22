const loadjson = require('jsonfile')
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'abis');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
   
    files.forEach(function (file) {
        
        console.log(file); 
    });
});
