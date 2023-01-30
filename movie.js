
const btn = document.getElementById(`btn`)
btn.addEventListener(`click`,()=> {
    const name = document.getElementById(`text`).value;
    call(name)
}
)



async function call(name) {
    const resp = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=773c12a9`);
    const data = await resp.json();
    // console.log(data); 
    console.log(data[`Search`])
    const arr = data.Search;
    arr.map(addMovies);
   
}
      
function addMovies(data){
    const movieData=document.getElementById("movdip");

    const details=` <div class="movieCard">
    <img class="imgWork" src=${data.Poster}    alt="movieImg">
    <h2 class="MovTitle">${data.Title}</h2>
    <h3>${data.Type}</h3>
   </div>`
   
   movieData.insertAdjacentHTML("afterbegin",details);
 }