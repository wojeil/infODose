$(document).ready(function () {
    // global variables
    let lat = 0;
    let long = 0;


    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat + "and" + long);

    });

    var policeStation = "police"
    //Query for google places

    const queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=8000&keyword=" + policeStation + "&key=AIzaSyD9Ff1tE0-VCQ6xdBVIecM05QkaMPvHlGU"


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        // loop for the five nearest location
        for (var i = 0; i < 10; i++) {
            let data = response.results[i];
            console.log(data);
           
        let policeCard =`<div class="card" style="width: 18rem;">
                <img src="${data.icon}" class="card-img-top" alt="Icon Placeholder">
                <div class="card-body">
                    <h5 class="card-title">${data.icon}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
                    <p class="card-text">${data.vicinity}</p>
                </div>
            </div>`;

        //add append 
        }
    })

});