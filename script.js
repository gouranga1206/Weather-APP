const form = document.getElementById("submitChanges");

form.addEventListener("submit", async function(e){
    e.preventDefault();
    const countryInput = document.getElementById('search').value;
    const displayData = document.getElementById("data");
    const finalData = await fetchData(countryInput)
    console.log(finalData);
    
    displayData.innerHTML=`
    <center>
    <b>${countryInput}</b><br>
    country-code:${finalData.sys.country}<br>
    temp: ${finalData.main.temp}<br>
    weather: ${finalData.weather[0].main}<br>
    min-temp:${finalData.main.temp_min}<br>
    max-temp:${finalData.main.temp_max}<br>
    humidity:${finalData.main.humidity}<br>
    </center>
    `

})


async function fetchData(country){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=bdaeb228384a0b78a57e3eac8536ac4f`)
    let finaldata = await response.json();
    if(!response.cod === 200){
        throw new Error("Network Issue")
    }
    return finaldata;
}
