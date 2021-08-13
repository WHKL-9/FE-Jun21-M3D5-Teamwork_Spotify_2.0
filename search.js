function performSearch() {
  let getSearchValueHere = document.querySelector(".user_search").value;
  console.log(getSearchValueHere)
   fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${getSearchValueHere}`,
        {
            method: "GET",
        }
      
    
    )
   
      .then((response) => {
        return response.json();
      })
      .then((result) => {
          displySearch(result.data)
      })
      .catch((error) => {
        console.error(error);
      });
     

      
    }
    

    const displySearch = function(result){
       
        let searchResults = document.querySelector(".modal-body")
        for(list of result)
        {
            searchResults.innerHTML += `<div class="card mb-5">
            <img src="${list.album.cover_medium}" class="card-img-top" alt="album">
            <div class="card-body">
              <h5 class="card-title">${list.album.title}</h5>
              <p class="card-text">${list.album.type}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        }
    }
      