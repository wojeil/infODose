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

    const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=8000&keyword=" + policeStation + "&key=AIzaSyAHOQKkfyQvRri-GzRByO3UPvP63mil_wU"


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
//$(".infoStats").empty(); 
let state = $("#st").val().trim();
let county = $("#co").val().trim();
let year = $("#yr").val().trim();
let divAlert= $("#warning");
if(state == "" || county == "" || year == ""){
 divAlert.text("Please fill out the forms completely");
}
else{
divAlert.text("");
$.get("/api/info/"+state+ "/"+county+"/"+year, function(data){
    var numOne = parseInt(data.DeathRate);
    var numTwo = parseInt(data.Population)/100000;
    var result,
    result = numOne*numTwo;
    let liStats= ` 
    <h4>In ${data.Year} approximately ${Math.round(result)} deaths occurred in ${data.County} that has a population
    of ${data.Population} in the state of ${data.State}</h4>
    
    <h3>Statistics</h3>
    <ul style='list-style:none'>
    <li><p>Year: ${data.Year}</p></li>
    <li><p>State: ${data.State}</p></li>
    <li><p>County: ${data.County}</p></li>
    <li><p>Population: ${data.Population}</p></li>
    <li><p>Death-rate: ${data.DeathRate}</p></li>
    </ul>
    `
      $(".infoStats").append(liStats)
    })
}
    $("#st").val("")
    $("#co").val("")
    $("#yr").val("")

})

//post request
//put request
//delete request
//get request 

});