$(document).ready(function () {
    $(".submitBTN").on("submit", function (event) {
      event.preventDefault();
      $.get("/report", function (data) {
        const reported = {
          name: $("#email").val().trim(),
          organization: $("#").val().trim(),

        }
        $.post("/api/report", reported, function () {
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
