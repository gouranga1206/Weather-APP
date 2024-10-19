const form = document.getElementById("submitChanges");

form.addEventListener("submit", async function(e){
    e.preventDefault();
    const countryInput = document.getElementById('search').value;
    const displayData = document.getElementById("data");
    const finalData = await fetchData(countryInput)
    console.log(finalData);
    
    displayData.innerHTML=`
    <pre>
    <b>${countryInput}</b>
    country-code:${finalData.sys.country}
    temp: ${finalData.main.temp}
    weather: ${finalData.weather[0].main}
    min-temp:${finalData.main.temp_min}
    max-temp:${finalData.main.temp_max}
    humidity:${finalData.main.humidity}
    </pre>
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
