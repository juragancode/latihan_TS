// const button = document.querySelector("button");

// // if (button) {
// //   button.addEventListener("click", () => {
// //     console.log("clicked");
// //   });
// // }

// function clickHandler(message: string) {
//   console.log("clicked" + message);
// }

// if (button) {
//   button.addEventListener("click", clickHandler.bind(null, "you're welcome!"));
// }

const add = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const botton = document.querySelector("button");

if (botton) {
  botton.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5, 2));
