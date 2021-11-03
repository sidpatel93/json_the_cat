const request = require('request')
const argv = process.argv.slice(2)

let breed = argv[0].toLowerCase()
console.log(breed)

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(err, response, body) => {
  if(!err){
    let data = JSON.parse(body);
    //console.log(data[0])
    if(data.length === 0) {
      console.log("Sorry the breed is not found.")
    }
    else{
      console.log(data[0]['description'])
    }
  }
  else{
    console.log(err)
  }
})