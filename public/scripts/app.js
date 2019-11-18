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
  const $categoryToggle = $(".header-toggle");
  $categoryToggle.on("click", function () {
    $(".category-items").slideToggle(700, function () {
    });

  });

})
