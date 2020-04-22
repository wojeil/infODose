$(document).ready(function () {
    // global variables
    let lat = 0;
    let long = 0;


    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat + "and" + long);

 

    var policeStation = "police"
    //Query for google places

    const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=8000&keyword=" + policeStation + "&key=AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU"


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        // loop for the five nearest location
        for (var i = 0; i < 3; i++) {
            let data = response.results[i];
            console.log(data);
           
        let policeCard =`<div id="pdCard" class="card" style="width: 10rem;">
                <img src="${data.icon}" class="card-img-top" alt="Icon Placeholder">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.vicinity}</h6>
                </div>
            </div>`;

        $("#police").append(policeCard);
        }
    })
});

//setting up get request from db
//adding global var for get


$("#subButton").on("click", function(event){
    event.preventDefault();
$(".infoStats").empty(); 
let state = $("#st").val().trim();
let county = $("#co").val().trim();
let year = $("#yr").val().trim();
   
$.get("/api/info/"+state+ "/"+county+"/"+year, function(data){
    let liStats= `
    <li><h3>Year: ${data.Year}</h3></li>
    <li>${data.State}</li>
    <li>${data.County}</li>
    <li>${data.Population}</li>
    <li>${data.DeathRate}</li>
    
    `
      $(".infoStats").append(liStats)   
    })
    $("#st").val("")
    $("#co").val("")
    $("#yr").val("")

})


});