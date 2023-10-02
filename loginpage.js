const fs = require('fs')

function readFile(){
    try{
        const data = fs.readFileSync('index.html')
        return data
    }
    catch(err){
        console.warn('Error in reading file', err)
        return null
    }
}

module.exports={
    readFile:readFile
}