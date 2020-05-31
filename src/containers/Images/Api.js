
function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
export const FetchData=()=>
    fetch('https://images-api.nasa.gov/search?q=nebula')
    .then(response=>response.json())
    .then(response=> response.collection.items)



   