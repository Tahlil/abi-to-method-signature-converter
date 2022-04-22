const jsonfile = require('jsonfile')
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'abis');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
   
    files.forEach(function (file) {
        jsonfile.readFile(path.join('abis', file), function (err, obj) {
            if (err) console.error(err)
            try {
                for (let index = 0; index < obj.length; index++) {
                    let entity = obj[index];
                    if(entity.type === "function"){
                        let arguments = [];
                        console.log("Function name: " + entity.name);
                        for(let i = entity.inputs.length; i--;){
                            arguments.push(entity.inputs[i].type)
                        }
                        console.log("Arguments:");
                        let argumentsString = arguments.join(",")
                        console.log(argumentsString);
                    }
                    
                    
                }
            } catch (error) {
                console.log(error);
            }
          })
    });
});
