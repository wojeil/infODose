$(document).ready(function () {
    $.get("/api/allreports", function (data) {
        console.log(data)
        });
    $("#reportButton").on("submit", function (event) {
      event.preventDefault();
      $.get("/auth/user", function (data) {
        const reported = {
          organization: $("#organization").val().trim(),
          report: $("#report").val().trim(),
            UserId: data.id
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
