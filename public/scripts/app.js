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

    if ($('#create-account').css('display') === 'none') {
      $('main').slideUp(700, function () {
        $('#login-account').slideUp(700, function () {
          $('#create-account').slideDown(700)
        });
      });
    } else {
      $('#create-account').slideUp(700, function () {
        $('#login-account').slideUp(700);
        $('main').slideDown(700)
      });
    }
  })

  const $login = $('#login');

  $login.on('click', function () {

    if ($('#login-account').css('display') === 'none') {
      $('main').slideUp(700, function () {
        $('#create-account').slideUp(700, function () {
          $('#login-account').slideDown(700)

        });

      });
    } else {
      $('#login-account').slideUp(700, function () {
        $('main').slideDown(700, function () {
          $('#create-account').slideUp(700);
        })

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
