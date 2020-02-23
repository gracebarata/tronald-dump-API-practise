function getANewJoke() {
  fetch("https://www.tronalddump.io/random/quote")
    .then(function (next) {
      console.log(next);
      return next.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("text").innerHTML = `<h1>${data.value}</h1>`;
    });

}

function rotatePic() {
  let img = document.getElementById("trump-pic")
  img.className = "rotate-center"

  setTimeout(function () {
    img.classList.remove("rotate-center")
  }, 2000);


}

let jokeBtn = document.getElementById("getJoke");
jokeBtn.addEventListener("click", getANewJoke);

jokeBtn.addEventListener("click", rotatePic)




