"use strict";
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("clicked" + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "you're welcome!"));
}
//# sourceMappingURL=app.js.map