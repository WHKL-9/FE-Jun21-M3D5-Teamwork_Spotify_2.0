function performSearch() {
  //let getSearchValueHere = document.querySelector("input").value;
  // console.log(getSearchValueHere)

   fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.value}`,
        {
            method: "GET",
        }
      
    
    )
   
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
      //const getSearchbox = function(){
       // let select = document.querySelector(".serchhere")
       // alert("clicked")
       // select.innerHTML = `"<input type ="text" class="form-control" placeholders ="what do you want" onchange = "performSearch()"`
    }
    

    
      