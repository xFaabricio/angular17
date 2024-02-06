function changeTheme() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
}

function stepFunction(event) {
    debugger;
    var elements = document.getElementsByClassName("collapse");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] !== event.target.ariaControls) {
            elements[i].classList.remove("show");
        }
    }
}