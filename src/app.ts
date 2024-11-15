const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", () => {
//     console.log("clicked");
//   });
// }

function clickHandler(message: string) {
  console.log("clicked" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "you're welcome!"));
}
