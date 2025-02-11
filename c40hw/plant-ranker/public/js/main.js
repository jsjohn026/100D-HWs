const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteText).forEach(element => {
  element.addEventListener('click', deletePlant)
});

async function deletePlant() {
  const plantName = this.parentNode.childNodes[1].innerText
  const varietyName = this.parentNode.childNodes[3].innerText
  try {
    const response = await fetch('deletePlant', {
      method: 'delete', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        'plant': plantName, 
        'variety': varietyName
      })
    })

    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}