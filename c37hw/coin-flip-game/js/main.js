document.querySelector('#flipClick').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch('/api')
  const data = await res.json()

  console.log(data);
  document.querySelector("#currentFlip").textContent = data.currentFlip

}