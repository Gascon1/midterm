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

  const $register = $('#profile');

  $register.on('click', function () {
    $('main').slideToggle(700, function () {

      $('#standalone').slideToggle(700);
    });

  })

});
