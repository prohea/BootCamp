var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  if (element.matches(".box")) {
    
    var state = element.getAttribute("data-state");

    if (state === "still") {
     
      element.dataset.state = "animate";
      element.setAttribute("data-state", "animate");

     
      element.setAttribute("src", element.dataset.animate);
    } else {
      
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});
