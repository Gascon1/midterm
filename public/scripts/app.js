// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users.users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function () {

  //Toggles the display of category items box
  const $categoryToggle = $("#movie-category-header");
  $categoryToggle.on("click", function () {
    $("#movie-category-items").slideToggle(700, function () {
    });

  });

})
