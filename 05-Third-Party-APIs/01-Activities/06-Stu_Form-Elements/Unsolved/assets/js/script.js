var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();
   var shoppingItem = $('input[name="shopping-input]').val();
   
    console.log('No Shopping item filled out in form!');
    return;
}

shoppingListEl.append('<li>' + shoppingItem + '<li>');

$('input[name="shopping-input"]');

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);