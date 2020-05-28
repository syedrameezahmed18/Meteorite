/*Fetching Data From Nasa Asteroids API's */





export function GET_DATA(){
    const data=[]
    fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY')
    .then(response=>response.json())
    .then(response=>data.push(response))

    return data

     
}