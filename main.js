console.log('javascript page')

function getTheWeather() {
    let city = document.querySelector('#cityname').value;
    const apiKey ='a09c1c3e20cf8b3b3d3624e92f8cbb6a'
    console.log('ok so far')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(weatherData => {
        console.log(weatherData)    

    //city Name:
    let cityname1 = weatherData['name']
    let countrycode= weatherData['sys']['country']
    document.querySelector('#cityTitle').innerHTML=('City:')
    document.querySelector('#cityName').innerHTML=(`${cityname1}, ${countrycode}`)
    console.log(cityname1, countrycode)

    //current temp:
    let currentTempInK = weatherData['main']['temp']
    console.log(currentTempInK)
    let currentTempInF = (((currentTempInK -273)*1.8)+32).toFixed(0)
    console.log(currentTempInF)
    document.querySelector('#currentTempTitle').innerHTML=(`Current Temperature:`)
    document.querySelector('#currentTemp').innerHTML=(`${currentTempInF}&#176 F`);

    //forecast weather
    let forecastMain = weatherData['weather'][0]['main']
    let forecastDescription = weatherData['weather'][0]['description']
    console.log(forecastMain)
    document.querySelector('#forecastMainTitle').innerHTML =('Current Forecast:')
    document.querySelector('#forecastMain').innerHTML=forecastMain
    document.querySelector('#forecastDescription').innerHTML=forecastDescription

    //feelslike:
    let feelsLikeInK = weatherData['main']['feels_like']
    console.log(feelsLikeInK)
    let feelsLikeInF = (((feelsLikeInK -273)*1.8)+32).toFixed(0)
    console.log(feelsLikeInF)
    document.querySelector('#feelsLikeTitle').innerHTML=(`Feels Like: `)
    document.querySelector('#feelsLikeTemp').innerHTML=(`${feelsLikeInF}&#176 F`);

    //lows
    let lowsInK = weatherData['main']['temp_min']
    // console.log(`lowsinK: ${lowsInK}`)
    let lowsInF = (((lowsInK -273)*1.8)+32).toFixed(0)
    // console.log(`lowsInF: ${lowsInF}`)
    document.querySelector('#lowsTitle').innerHTML=(`Low: `)
    document.querySelector('#lowsTemp').innerHTML=(`${lowsInF}&#176 F`)


    //highs
    let highsInK = weatherData['main']['temp_max']
    // console.log(`highsInK: ${highsInK}`)
    let highsInF = (((highsInK -273)*1.8)+32).toFixed(0)
    // console.log(`highsInK: ${highsInF}`)
    document.querySelector('#highsTitle').innerHTML=(`High: `)
    document.querySelector('#highsTemp').innerHTML=(`${highsInF}&#176 F`);

    //forecastIcon
    let forecastIcon = weatherData['weather'][0]['icon']
    console.log(forecastIcon)
    // document.querySelector('#weatherIconTitle').innerHTML=('Forecast Icon: ')
    document.querySelector('#weatherIcon').innerHTML=`<img src='http://openweathermap.org/img/wn/${forecastIcon}@4x.png'>`

    // humidity
    let humidity = weatherData['main']['humidity']
    document.querySelector('#humidityTitle').innerHTML = ('Humidity:')
    document.querySelector(`#humidityVal`).innerHTML = (`${humidity}%`)

    //current time
    months = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
    let current_time_UNIX=weatherData['dt']
    // let timezone = weatherData['timezone']
    // console.log(`timezone: ${timezone}`)
    console.log(`current time in UNIX: ${current_time_UNIX}`)
    let currentTimeConversion = new Date(current_time_UNIX * 1000);
    console.log(currentTimeConversion)
    // let time_offset = currentTimeConversion.getTimezoneOffset()
    // console.log(new Date((current_time_UNIX+time_offset)*1000));
    let currentDate = currentTimeConversion.getDate().toString();
    let currentDay = currentTimeConversion.getDay().toString();
    let currentMonth = currentTimeConversion.getMonth().toString();
    let currentYear = currentTimeConversion.getFullYear().toString();
    console.log(`date: ${days[currentDay]} ${currentDate} ${months[currentMonth]} ${currentYear}`)
    let currentTimeHour = currentTimeConversion.getHours().toString().padStart(2,0);
    const currentTime12HourFormat = currentTimeHour >= 13 ? currentTimeHour %12: currentTimeHour;
    const currentAMPM = currentTimeHour >=12 ? 'PM': 'AM';
    let currentTimeMinute = currentTimeConversion.getMinutes().toString().padStart(2,0);
    let currentTime = `${currentTime12HourFormat}:${currentTimeMinute} ${currentAMPM}`;
    console.log(`currentTime: ${currentTime}`)
    document.querySelector('#date').innerHTML=(`${days[currentDay]} ${currentDate} ${months[currentMonth]} ${currentYear}`)
    document.querySelector('#currentTime').innerHTML=(`${currentTime}`)
    document.querySelector(`#currentTimeTitle`).innerHTML=('Current Time: ')

    //sunrise time
    let sunriseTime_UNIX = weatherData['sys']['sunrise']
    let sunrise_timeConversion = new Date(sunriseTime_UNIX *1000);
    let sunriseHour = sunrise_timeConversion.getHours().toString().padStart(2,0);
    let sunriseMinute = sunrise_timeConversion.getMinutes().toString().padStart(2,0);
    const sunriseHour12HrFormat = sunriseHour >=13 ? sunriseHour %12: sunriseHour
    const sunriseAMPM = sunriseHour >=12 ? 'PM':'AM'
    sunriseTime = `${sunriseHour12HrFormat}:${sunriseMinute} ${sunriseAMPM}`
    console.log (`sunriseTime: ${sunriseTime}`)
    document.querySelector('#sunriseTitle').innerHTML='Sunrise:'
    document.querySelector('#sunrise').innerHTML = sunriseTime

    //sunset time
    let sunsetTime_UNIX = weatherData['sys']['sunset']
    let sunset_timeConversion = new Date(sunsetTime_UNIX *1000);
    let sunsetHour = sunset_timeConversion.getHours().toString().padStart(2,0);
    const sunsetHour12HrFormat = sunsetHour >=13 ? sunsetHour %12: sunsetHour
    let sunsetMinute = sunset_timeConversion.getMinutes().toString().padStart(2,0);
    const sunsetAMPM = sunsetHour >=12 ? 'PM':'AM'
    sunsetTime = `${sunsetHour12HrFormat}:${sunsetMinute} ${sunsetAMPM}`
    console.log(`sunset time: ${sunsetTime}`)
    document.querySelector('#sunsetTitle').innerHTML='Sunset:'
    document.querySelector('#sunset').innerHTML = sunsetTime

    

        function background_image() {
            if (forecastMain != 'Clouds'){
                console.log('it is not cloudy today')
            }
        }
    })

}