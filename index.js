const jsonfile = require('jsonfile');
const Web3EthAbi = require('web3-eth-abi');
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
                const methodSignatures = {};
                for (let index = obj.length; index--;) {
                    let entity = obj[index];
                    if(entity.type === "function"){
                        let arguments = [];
                        console.log("Function name: " + entity.name);
                        let numberOfInput = entity.inputs.length;
                        for(let i = 0; i<numberOfInput ;i++){
                            arguments.push(entity.inputs[i].type)
                        }
                        console.log("Arguments:");
                        let argumentsString = arguments.join(",")
                        let method = entity.name + "(" + argumentsString + ")";

                        methodSignatures[entity.name] = Web3EthAbi.encodeFunctionSignature(method);
                        

                    }
                    
                    
                }
                console.log(methodSignatures);
            } catch (error) {
                console.log(error);
            }
          })
    });
});
