$(document).ready(function () {
  
  
  $.get("/api/allreports", function (reportdata) {
    console.log(reportdata)
    for (var i = 0; i < reportdata.length; i++) { 
      
     var allReports = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${reportdata[i].organization}</h5>
        <p class="card-text">Report:${reportdata[i].report}</p>
      </div>
      
    </div>
    <button id="deleteButton" data-id="${reportdata[i].id}"> Delete </button>
  `;
 

    $(".fullReports").append(allReports);

  }
});
  

    
    
  $("#reportButton").on("click", function (event) {
    event.preventDefault();
    console.log("......submitting form")
    $.get("/auth/user", function (userdata) {
      console.log(userdata);
        
      var reported = {
        organization: $("#organization").val().trim(),
        report: $("#report").val().trim(),
        UserId: userdata.id
      }
      $.post("/api/newreport", reported, function () {
        window.location.reload()
        
      })
    })
  
  });

$("#deleteButton").on("click",function (event){
  event.preventDefault();
  console.log("is clicking");
  var id = $("#deleteButton").data("id");

  $.ajax({
    method: "DELETE",
    url: "/api/deletereport/" + id
  })
    .then(function() {
      window.location.reload()
     
    });


});

});
