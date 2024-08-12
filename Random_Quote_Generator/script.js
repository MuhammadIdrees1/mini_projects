let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

let getQuote = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "71f1cc6cd1mshd6f388ddef5750ep16d2b9jsn5723705a5c82",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      quote.innerText = response.content;
      author.innerText = response.originator.name;
    })
    .catch((err) => console.error(err));
};
