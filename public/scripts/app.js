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

// create category list item element in html
const createListItem = function (todo_item) {
  let $listItem = $('<li>')
  let $div = $('<div>')
  let $bulletIcon = $('<i>').addClass('far fa-circle custom-bullets');
  let $span = $('<span>').text(todo_item.name)
  let $settingsIcon = $('<i>').addClass('fas fa-ellipsis-v more-settings');


  $div.append($bulletIcon).append($span).append($settingsIcon)
  $listItem.append($div)
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
  let $categoryIcon = $('<i>').addClass('fas fa-caret-down');
  $categoryHeader.append($categoryIcon)
  $categoryHeader.append(category[0].category)
  $category.append($categoryHeader)

  let $categoryUnorderedList = createUnorderedListElement(category)
  $category.append($categoryUnorderedList)

  return $category
}

// render all categories
const renderCategories = function (todo_items_by_categories_obj) {
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
  loadCategories()

  // togles the category icon and ul list associated to the category
  $("main").on("click", "header", function () {
    console.log($(this))
    //Toggles the display of category icon
    $(this).children(".fa-caret-down").toggleClass("open")
    //Toggles the display of category items box
    $(this).siblings(".category-items").slideToggle(700);
    event.stopPropagation()
  });

  // toggles the checkmark of the todo item once it is clicked on (completed)

  $("main").on("click","div", function(){
    console.log($(this))
    $(this).children(".custom-bullets").toggleClass("fas fa-check-circle").toggleClass("far fa-circle")
    $(this).children("span").toggleClass("line-through")
  } )



//
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
