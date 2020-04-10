//alert("JS working!");

// select all lis to add finished class
// FUNCTION CHANGE, second parameter adds as the listener
// select all future lis under ul will fire
$("ul").on("click", "li", function(){
  console.log("you clicked an li");
  $(this).toggleClass("finished");
});

// select x spans with remove clsss
// select all future .removes under ul
// evenet bubbling..
// use event | event.stopPropagation()
$("ul").on("click", ".remove", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
});

// add a listener that fires when we hit the enter key
$("input[type='text']").on("keypress", function(event){
  if (event.which === 13) {
    // grab the input text value
    let inputText = $(this).val();
    $(this).val("");
    // append li element text to ul
    $("ul").append("<li><span class='remove'><i class='fas fa-trash-alt fa-sm'></i></span> " + inputText + "</li>");
  }
});

// add listener to + icon
$("#plus").on("click", function(){
  console.log("You clickd the plus");
  $("#input").fadeToggle();
})
