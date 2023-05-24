
async function getTemperatures(lat, long){
    const response = 
        await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST`)
        // try {
            
        // } catch (error) {
            
        // }

        return response.json();
}

getTemperatures(31.25,34.79).then(response => console.log(response.hourly.temperature_2m[20])).catch(error => console.log("error"));

