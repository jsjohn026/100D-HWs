document.querySelector("button").addEventListener("click", getFact)

function getFact() {
  fetch('http://numbersapi.com/random/math?json')
    .then(res => res.json())
    .then(data => {
      console.log(data.text)
      document.querySelector("h3").innerText = data.text
    })
    .catch(err => {
      console.log(`error: ${err}`)
    })
}