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

    if ($('#standalone').css('display') === 'none') {
      $('main').slideToggle(700, function () {
        $('#standalone').slideToggle(700);
      });
    } else {
      $('#standalone').slideToggle(700, function () {
        $('main').slideToggle(700)
      });
    }
  })

  $('#add-item').keypress(function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      this.form.submit();
    }
  });

});
