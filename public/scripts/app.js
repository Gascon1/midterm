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

  const $categoryToggle = $(".category-header");

    //Toggles the display of category icon
  $categoryToggle.on("click", function () {
    $(this).children("i").toggleClass("open")

    //Toggles the display of category items box
    $(this).siblings(".category-items").slideToggle(700);

  });



});
