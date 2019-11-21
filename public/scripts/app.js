
// create category list item element in html
const createListItem = function (todo_item) {
  let $listItem = $('<li>')
  let $div = $('<div>')
  let $bulletIcon = $('<i>').addClass('far fa-circle custom-bullets');
  let $span = $('<span>').text(todo_item.name)
  let $settingsIcon = $('<i>').addClass('fas fa-ellipsis-v more-settings');


  $div.append($bulletIcon).append($span)
  $listItem.append($div).append($settingsIcon)
  return $listItem
}

// create category unorder list element in html
const createUnorderedListElement = function (todo_items_arr) {
  const todo_items = todo_items_arr
  let $categoryUnorderedList = $('<ul>').addClass('category-items')
  for (const todo_item of todo_items) {
    let $listItem = createListItem(todo_item)
    $categoryUnorderedList.append($listItem)
  }
  return $categoryUnorderedList
}


// create category section element in html
const createCategory = function (category) {
  let $category = $('<section>').addClass('category')
  let $categoryHeader = $('<header>').addClass('category-header');
  let $categoryIcon = $('<i>').addClass('fas fa-chevron-down');
  let $categorySpan = $('<span>').text(category[0].category);

  $categoryHeader.append($categoryIcon)
  $categoryHeader.append($categorySpan)
  // $categoryHeader.append(category[0].category)
  $category.append($categoryHeader)

  let $categoryUnorderedList = createUnorderedListElement(category)
  $category.append($categoryUnorderedList)

  return $category
}

// render all categories
const renderCategories = function (todo_items_by_categories_obj) {
  $("main").empty();
  for (const category in todo_items_by_categories_obj) {
    $("main").append(createCategory(todo_items_by_categories_obj[category]))

  }
  // header

}

//this variable is a placeholder for the beginning of the URL path
const serverURL = "http://localhost:8080/db/categories/todo_items";
// This function performs a GET request to the tweets database and then passes the array to the
// renderTweets function
const loadCategories = function () {
  $.ajax({
    url: `${serverURL}`,
    method: "GET"
  })
    .then(function (database) {
      renderCategories(database);
    });
};


$(document).ready(function () {

  const $form = $('#new-todo-item')
  $form.on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:8080/db/todo_items",
      method: 'POST',
      data: $(this).serialize()
    })
      .done(function () {
        loadCategories();
      })
  })

  //loading categories when the page is ready if the user has already populated the database
  loadCategories()





  // togles the category icon and ul list associated to the category
  $("main").on("click", "header", function () {
    console.log($(this))
    //Toggles the display of category icon
    $(this).children(".fa-chevron-down").toggleClass("open")
    //Toggles the display of category items box
    $(this).siblings(".category-items").slideToggle(700);
    event.stopPropagation()
  });

  // toggles the checkmark of the todo item once it is clicked on (completed)

  $("main").on("click", "div", function () {
    $(this).children("i .custom-bullets").toggleClass("fas fa-check-circle")
    $(this).children("i .custom-bullets").toggleClass("far fa-circle")
    $(this).children("span").toggleClass("line-through")
  })

  // turns on the lightbox once more setting icons is clicked
  $("main").on("click", "li .more-settings", function () {
    console.log($(this))
    $("#lightbox").toggleClass("lightbox")
    $("#more-options").toggleClass("none")

  })

  // turns off the lightbox once the lightbox is clicked
  $("#lightbox").on("click", function (event) {
    if (event.target.id === "lightbox") {
      $("#lightbox").toggleClass("lightbox")
      $("#more-options").toggleClass("none")
    }
  })

  // togles the more-options box icon and ul list associated to more-options box
  $("body").on("click", "header", function () {
    console.log($(this))
    //Toggles the display of category icon
    $(this).children(".fa-chevron-down").toggleClass("open")
    //Toggles the display of category items box
    $(this).siblings(".category-items").slideToggle(700);
    event.stopPropagation()
  });

  // toggles the checkmark of the category once it is clicked on (completed) in the more-options box

  $("body").on("click", "div", function () {
    $(this).children(".custom-bullets").toggleClass("fas fa-check-circle").toggleClass("far fa-circle")
  })

  //
  const $register = $('#register');

  $register.on('click', function () {

    if ($('#create-account').css('display') === 'none') {
      $('main').slideUp(400, function () {
        $('#login-account').slideUp(400, function () {
          $('#edit-account').slideUp(400, function () {

            $('#create-account').slideDown(400)
          })
        });
      });
    } else {
      $('#create-account').slideUp(400, function () {
        $('#login-account').slideUp(400);
        $('#edit-account').slideUp(400)
        $('main').slideDown(400)
      });
    }
  })

  //
  const $profile = $('#profile');

  $profile.on('click', function () {

    if ($('#edit-account').css('display') === 'none') {
      $('main').slideUp(400, function () {
        $('#login-account').slideUp(400, function () {
          $('#create-account').slideUp(400, function () {

            $('#edit-account').slideDown(400)
          })

        });
      });
    } else {
      $('#edit-account').slideUp(400, function () {
        $('#create-account').slideUp(400, function () {
          $('#login-account').slideUp(400);
          $('main').slideDown(400)
        });
      });

    }
  });

  const $login = $('#login');

  $login.on('click', function () {

    if ($('#login-account').css('display') === 'none') {
      $('main').slideUp(400, function () {
        $('#create-account').slideUp(400, function () {
          $('#edit-account').slideUp(400, function () {

            $('#login-account').slideDown(400)
          })


        });

      });
    } else {
      $('#login-account').slideUp(400, function () {
        $('main').slideDown(400, function () {
          $('#edit-account').slideUp(400)
          $('#create-account').slideUp(400);
        })

      });
    }
  })


});

$(document).ready(function () {

  const $form = $('#registration-form')
  $form.on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:8080/db/users",
      method: 'POST',
      data: $(this).serialize()
    })
      .done(function () {
        $('#create-account').slideUp(400, function () {
          $('main').slideDown(400);
        })
        loadCategories();
      })
  })
});

$(document).ready(function () {

  const $form = $('#login-form')
  $form.on('submit', function (event) {
    event.preventDefault();

    userEmail = encodeURI($(this).serializeArray()[0].value);

    userPassword = encodeURI($(this).serializeArray()[1].value);

    console.log('user email :', userEmail, 'user password: ', userPassword);
    $.ajax({
      url: `http://localhost:8080/db/users/login`,
      method: 'POST',
      data: $(this).serialize()
    })
      .done(function (user) {

        localStorage.setItem('user', user.id)

        $('#login-account').slideUp(400, function () {
          $('main').slideDown(400);
          $('#login').slideUp(0);
          $('#register').slideUp(0);
          $('#profile').slideDown(0);
          $('#logout').slideDown(0);
        })
        loadCategories();
      })
  })
});


$(document).ready(function () {

  const $form = $('#update-form')
  $form.on('submit', function (event) {
    event.preventDefault();

    userEmail = encodeURI($(this).serializeArray()[0].value);

    userPassword = encodeURI($(this).serializeArray()[1].value);

    const userID = localStorage.getItem('user')

    console.log('user email :', userEmail, 'user password: ', userPassword);
    $.ajax({
      url: `http://localhost:8080/db/users/${userID}`,
      method: 'PUT',
      data: $(this).serialize()
    })
      .done(function (user) {
        console.log(user)
        console.log($(this))
        loadCategories();
      })
  })
});

$(document).ready(function () {

  const $logout = $('#logout')
  $logout.on('click', function () {
    localStorage.clear()

    $('#register').slideDown(0);
    $('#login').slideDown(0);
    $('#profile').slideUp(0);
    $('#logout').slideUp(0);

  })
});

$(document).ready(function () {

  if (!localStorage.getItem('user')) {
    $('#register').slideDown(0);
    $('#login').slideDown(0);
    $('#profile').slideUp(0);
    $('#logout').slideUp(0);
  } else {
    $('#register').slideUp(0);
    $('#login').slideUp(0);
    $('#profile').slideDown(0);
    $('#logout').slideDown(0);
  }
});
