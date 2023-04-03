
// Get Form

const form = document.getElementById('cityForm');

async function handleFormSubmit(event){
    event.preventDefault();
    let cityName = event.target.cityName.value;
    console.log(cityName);

    let cityInfo = await getCityInfo(cityName);
    console.log(cityInfo);

    buildCityCard(cityInfo);

    event.target.cityName.value = '';
}

const key = "c532d2646b1341b28cd53907230304";

async function getCityInfo(cityName){
    try{
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c532d2646b1341b28cd53907230304&q=${cityName}&aqi=no`)
        let data = await response.json();
        console.log(data);
        return data;
    } catch(err){
        console.error(err);        
    };
};

// ---------------------------------------------------------------------------------

let cityTitle = document.createElement('h1');
cityTitle.id = 'cityTitle';
cityTitle.className = 'text-white text-center ';
cityTitle.innerHTML = 'Manila' ;
console.log(cityTitle);

let cityTemp = document.createElement('h2');
cityTemp.id = 'cityTemp';
cityTemp.className = 'text-white text-center mt-3';
cityTemp.innerHTML = '40 &deg;F'  ;
console.log(cityTemp);

let cityCondition = document.createElement('h2');
cityCondition.id = 'cityCondition';
cityCondition.className = 'text-white text-center lead mt-3';
cityCondition.innerHTML = 'Cloudy'  ;
console.log(cityCondition);

let cityTime = document.createElement('h2');
cityTime.id = 'cityTime';
cityTime.className = 'text-white text-center lead mt-3';
cityTime.innerHTML = '2023-04-03 10:26'  ;
console.log(cityTime);

let cityWind = document.createElement('h2');
cityWind.id = 'cityWind';
cityWind.className = 'text-white text-center lead mt-3';
cityWind.innerHTML = '9.8 mph'  ;
console.log(cityWind);

let cityPic = document.createElement('h2');
cityPic.id = 'cityPic';
cityPic.className = 'text-white text-center lead mt-3';
cityPic.innerHTML = ''  ;
console.log(cityPic);

let nextt = document.getElementById('cityForm');

nextt.after(cityPic)
nextt.after(cityWind)
nextt.after(cityTime)
nextt.after(cityCondition)
nextt.after(cityTemp)
nextt.after(cityTitle)





// ----------------------------------------------------------------------------------
async function buildCityCard(cityObj){
  
    // let cardBody = document.createElement('h1');
    // cardBody.id = 'my-cardbody';
    // cardBody.className = 'text-white text-center mt-3';
    cityTitle.innerHTML = cityObj.location.name ;
    // console.log(cityTitle);
    cityTemp.innerHTML = ` ${cityObj.current.temp_f} &deg;F `;
    cityCondition.innerHTML = cityObj.current.condition.text;
    cityTime.innerHTML = cityObj.location.localtime;
    cityWind.innerHTML = `${cityObj.current.wind_mph} mph`;
    cityPic.innerHTML = cityObj.current.condition.icon;

    

    
    // let nextt = document.getElementById('cityForm');
    // nextt.after(cityTitle)

    // let cityTitle = document.getElementById(cityName1)
    // let cityTemp = document.getElementById(temperature)
    // card.append(cityTitle);
    // cityDisplay.append(cityTemp)







    


    // let cityTitle = document.getElementById('cityName1')
    // cityTitle.innerHTML = cityObj.location[0];

    // let cityTemp = document.getElementById('cityTemp')
    // cityTemp.innerHTML = cityObj.current.temp_f;

    // let cityDesc = document.getElementById('description');
    // cityDesc.innerHTML = cityObj.current.condition.text;

    // card.append(cityTitle);
    // card.append(cityTemp);
    // card.append(cityDesc);
}


form.addEventListener('submit', handleFormSubmit);






