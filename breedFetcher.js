const request = require('request')


const fetchBreedDescription = (breedName, callback)=>{

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(err, response, body) => {
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

}

module.exports = {fetchBreedDescription}