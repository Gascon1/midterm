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



const createCategoryHeader = function (todo){
let $categoryHeader = $('<header>').addClass('category-header');
  let $categoryIcon = $('<i>').addClass('fas fa-caret-down');
  $header.append($categoryIcon).text(todo_items.category)
  return $header
}

const createUnorderedListElement = function (todo_items_obj){
  const todo_items = todo_items_obj.todo_items
  let $categoryUnorderedList = $('<ul>').addClass('category-items')
  for(const todo_item of todo_items){
    let $listItem = createListItem(todo_item)
    $categoryUnorderedList.append($listItem)
  }
  return $categoryUnorderedList
}

const createListItem = function(todo_item){
  let $listItem = $('<li>')
  let $div = $('<div>')
  let $bulletIcon = $('<i>').addClass('far fa-circle custom-bullets');
  let $span = $('<span>').text(todo_item.name)
  let $settingsIcon = $('<i>').addClass('fas fa-ellipsis-v more-settings');

  $listItem.append($div).append($bulletIcon)
  .append($span).append($settingsIcon)
  return $listItem
}
/**function to generate a category (html) */
const renderCategories = function (todo_items_obj) {
  const todo_items = todo_items_obj.todo_items
  for (const todo_item of todo_items){
    let $category = createCategory(todo_item)
    $('main').append()
  }
  // header

}

$(document).ready(function () {
  const $categoryToggle = $(".category-header");
  $categoryToggle.on("click", function () {
    //Toggles the display of category icon
    $(this).children("i").toggleClass("open")
    //Toggles the display of category items box
    $(this).siblings(".category-items").slideToggle(700);
  });
});
