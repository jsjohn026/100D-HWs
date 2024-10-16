document.querySelector("button").addEventListener("click", getRecipe)

function getRecipe() {
  let recipe = document.querySelector("input").value

  fetch(`https://api.edamam.com/api/recipes/v2?type=any&beta=true&q=${recipe}&app_id=3265c959&app_key=6e7a880ede9f9aecca3738cb7a328c27`)
    .then(res => res.json()) // parse response as json
    .then(data => {
      console.log(data.hits[0])
      document.querySelector("h2").innerText = data.hits[0].recipe.label
      document.querySelector("img").src = data.hits[0].recipe.image
      document.querySelector("a").href = data.hits[0].recipe.url
    })
    .catch(err => {
      console.log(`error: ${err}`)
    })

}