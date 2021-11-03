const request = require('request')


const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {

    let data = JSON.parse(body)
    let desc

    // Check if the data received is empty
    if (data.length === 0) {
      desc = "Sorry the breed is not found."
    }
    else {
      desc = data[0]['description']
    }
    // Call the callback based on the valued received for err and desc.
    callback(err, desc)
  })
}


module.exports = { fetchBreedDescription }