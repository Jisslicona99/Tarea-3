let fetch = require('node-fetch')


function getCountry(countryName){
     fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
       return response.json()

    })
    .then(response =>{
        console.log(response)
    })
    .catch(err => console.log("Error: ", err))
}
getCountry("Honduras")