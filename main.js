const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', getFetch);

document.getElementById("search-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("search-btn").click();
    }
});


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${choice}`

fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    const h2 = document.createElement('h2');
    document.querySelector('h2').innerText = data.artists[0].strArtist

    const h3 = document.createElement('h3');
    if(!data.artists[0].intFormedYear){
      document.querySelector('h3').innerText = ''
    }else{
      document.querySelector('h3').innerText = `Career Start: ` + data.artists[0].intFormedYear
    }

    const img = document.createElement('img');
    document.querySelector('img').src = data.artists[0].strArtistThumb

    const h4 = document.createElement('h4');
    document.querySelector('h4').innerText = data.artists[0].strGenre

    const p = document.createElement('h5');
    document.querySelector('h5').innerText = data.artists[0].strBiographyEN;

    const span = document.createElement('div');
    
    if(!data.artists[0].intDiedYear){
      document.querySelector('div').innerText = 'This Artist Is A Potential Performer.'
    }else{
      document.querySelector('div').innerText = `As of ` + data.artists[0].intDiedYear + `: This Artist Can Not Perform`
    }
})
  .catch(err => {
      console.log(`error ${err}`)
  });
}
