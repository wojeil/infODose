$(document).ready(function () {
  $.get("/api/allreports", function (reportdata) {
    console.log(reportdata)
    for (var i = 0; i < reportdata.length; i++) { 
      
     var allReports = `

      <p> ${reportdata[i].organization} </p>
      <p> ${reportdata[i].report} </p>
  
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
});

$(".deleteBtn").on("submit",function (event){
  event.preventDefault();
  var id = $(this).data("id");

  $.ajax({
    method: "DELETE",
    url: "/api/report/" + id
  })
    .then(function() {
     
    });


})
