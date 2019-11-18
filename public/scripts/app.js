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


/**function to generate a category (html) */
const createCategoryElement = function (category,) {
  // header
  let $category = $('<section>').addClass('category');
  let $header = $('<header>').addClass('category-header');
  let $categoryIcon = $('<i>').addClass('fas fa-caret-down').text(todo_items);
  $div.append($profilePic);
  let $span = $('<span>').text(tweet.user.name).addClass('name');
  $div.append($span);
  $header.append($div);
  let handle = $('<span>').text(tweet.user.handle).addClass('handle');
  $header.append(handle);
  $tweet.append($header);

  //content
  let $main = $('<main>').text(tweet.content.text);
  $tweet.append($main);

  //footer
  let date = new Date(tweet.created_at);
  let timeElapsed = timeSince(date);
  let $footer = $('<footer>').addClass('container')
  let $timeSince = $('<span>').text(`${timeElapsed} ago`);
  $footer.append($timeSince);
  let $icons = $('<span>')
  let $i2 = $('<i>').addClass('fas fa-flag reaction');
  $icons.append($i2);
  let $i = $('<i>').addClass('fas fa-retweet reaction');
  $icons.append($i);
  let $i3 = $('<i>').addClass('fas fa-heart reaction');
  $icons.append($i3);
  $footer.append($icons);
  $tweet.append($footer);
  return $tweet;
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
