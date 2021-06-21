var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#city");
var citiesContainerEl = document.querySelector("#cities-container");
var cityName = nameInputEl.value
var forecastBlock = document.getElementById('forecast')
var citySelection = document.querySelector(".citiesHere")
var divOne = document.querySelector(".divOne");
var divTwo = document.querySelector(".divTwo");
var divThree = document.querySelector(".divThree");
var divFour = document.querySelector(".divFour");
var divFive = document.querySelector(".divFive");



  var getCityWeather = function(cityName) {
    // format the github api url
    // var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=10&appid=" + weatherAPI
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=946df0e1b4096d4f1012efc16b1c746e"
    //946df0e1b4096d4f1012efc16b1c746e
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
        //  console.log(response);
           return response.json();
        } else {
          alert("Error: " + response.statusText);
        }
      })
        .then((data) => {
         var cityNames = data.name;
         var cityTemp = data.main.temp;
         var cityWind = data.wind.speed;
         var cityHumdity = data.main.humidity;
         var cityFeelsLike = data.main.feels_like;
        // console.log(cityNames)
        // console.log(data)
        //  console.log(cityNames)
        //  console.log(cityTemp)
        //  console.log(cityWind)
        //  console.log(cityHumdity)
        //  console.log(cityFeelsLike)
         displayWeather(data);
        })

         var displayWeather =function(data){
           // loop over repos
           
            
               //console.log(data)
               citiesContainerEl.textContent =( 'Name: ' + data.name + 'Temp: ' + data.main.temp + ' Wind Speed: ' + data.wind.speed + ' Humidity: ' + data.main.humidity + ' Feels Like ' + data.main.feels_like)
               
        
            }

  };

   var getFiveForecast = function(cityName) {
     var futureApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=946df0e1b4096d4f1012efc16b1c746e"
  
   // make a get request to url
      fetch(futureApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
        //  console.log(response);
           return response.json();
        } else {
          alert("Error: " + response.statusText);
        }
      }).then((data) => {
        var cityName = data.city.name;
        var cityOneTemp = data.list[1].main.temp;
        var cityOneWind = data.list[1].wind.speed;
        var cityOneHumdity = data.list[1].main.humidity;
        var cityOneFeelsLike = data.list[1].main.feels_like;
      //  console.log(data)
      //   console.log(cityName)
      //   console.log(cityOneTemp)
      //   console.log(cityOneWind)
      //   console.log(cityOneHumdity)
      //   console.log(cityOneFeelsLike)
        displayWeather(data);
       })

        var displayWeather =function(data){
          // loop over repos
          //console.log(data + 'This is inside the string')
            //for (var i = 0; i < data.length; i++) {
             // console.log(data)
              divOne.textContent=( 'Name: ' + data.city.name + ' Temp: ' + data.list[1].main.temp + 'Wind Speed:' + data.list[1].wind.speed + ' Humidity ' + data.list[1].main.humidity + ' Feels Like ' + data.list[1].main.feels_like)
              
              divTwo.textContent=( 'Name: ' + data.city.name + ' Temp: ' + data.list[2].main.temp + 'Wind Speed:' + data.list[2].wind.speed + ' Humidity ' + data.list[2].main.humidity + ' Feels Like ' + data.list[2].main.feels_like)
              
              divThree.textContent=( 'Name: ' + data.city.name + ' Temp: ' + data.list[3].main.temp + 'Wind Speed:' + data.list[3].wind.speed + ' Humidity ' + data.list[3].main.humidity + ' Feels Like ' + data.list[3].main.feels_like)
              
              divFour.textContent=( 'Name: ' + data.city.name + ' Temp: ' + data.list[4].main.temp + 'Wind Speed:' + data.list[4].wind.speed + ' Humidity ' + data.list[4].main.humidity + ' Feels Like ' + data.list[4].main.feels_like)
              
              divFive.textContent=( 'Name: ' + data.city.name + ' Temp: ' + data.list[5].main.temp + 'Wind Speed:' + data.list[5].wind.speed + ' Humidity ' + data.list[5].main.humidity + ' Feels Like ' + data.list[5].main.feels_like)
              //divOne.appendChild(divOneElText);
              
       
            //}
           }

 };
      

  var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var cityName = nameInputEl.value.trim();

     if (cityName) {
       getCityWeather(cityName);
       getFiveForecast(cityName);
      
  
    //   // clear old content
      var cityButton = document.createElement("button");
       citiesContainerEl.textContent ='';
       cityButton.textContent= cityName;
       cityButton.addEventListener("click", function(){
        
        console.log(cityButton.innerText())
         console.log ('testing')
       })
       citySelection.appendChild(cityButton);
        
     } else {
       alert("Please enter a city");
       
     }
       //if (cityName === cityStorage.city) {
        //alert('City already loaded, please choose another location!')


          // getCityWeather(citybutton.value),
          // getFiveForecast(citybutton.value)
        
       
      //}
     
  } 
  

  
   
  

  
  // var cityStorage = JSON.parse(localStorage.getItem('city'))||[];
  // cityStorage.push(cityName);
  // console.log(cityStorage);
  // // for (var i = 0 ; i > cityStorage.length; i++) {
  // //   var buttonEl = document.createElement("button");
  // //   console.log(buttonEl);
  // //   buttonEl.innerHTML= cityStorage[i];
  // //   citiesContainerEl.appendChild(buttonEl)
    
  // // }
  // localStorage.setItem('city', JSON.stringify(cityStorage));

  
  //  // localStorage.clear();

  //  //storeCity.addEventListener("button", getCity)


  userFormEl.addEventListener("submit", formSubmitHandler);