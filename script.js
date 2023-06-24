let searchInp = document.querySelector('input');
let container = document.querySelector(".images");



searchInp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let searchFor = searchInp.value;
      displayImgs(searchFor);
    }
  });

async function getPhotos(searchFor){
    let data = await fetch(`https://api.unsplash.com/search/photos?client_id=HGnJxkIsPNJ-EqcpNBEruzIsaJpEdf-R_3PxHOK_t1k&page=1&query=${searchFor}`)
    .then(res => res.json())
    
    return data.results;
}

async function displayImgs(searchFor){
    let arr = await getPhotos(searchFor);
    let code = '';
    for (let i = 0; i < arr.length; i++) {
        code += `<img src="${arr[i].urls.full}" />`;
    }
    container.innerHTML = code;
}