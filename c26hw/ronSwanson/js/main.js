document.querySelector("button").addEventListener("click", getQuote)

function getQuote() {
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => res.json()) //parse response as json
    .then(data => {
      console.log(data)
      document.querySelector("h3").innerText = `"${data[0]}"`
    })
}