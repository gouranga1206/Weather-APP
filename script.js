
const country = document.getElementById("search")
const searchButton = document.getElementById("submit")

searchButton.addEventListener("click", async function(){
    const data = document.getElementById('data');
    const finalData = await fetchData(toString(country.value))
    data.innerText = finalData
})

async function fetchData(country){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country},uk&callback=test&appid=bdaeb228384a0b78a57e3eac8536ac4f`, {
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const finalData = await response.json();
    return finalData;
}
