//--Fs -sync

const fs = require('fs')

const writeToFile = async (data, path) => {
  const jsonString = JSON.stringify(data)
  fs.writeFileSync(path, jsonString, err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
}