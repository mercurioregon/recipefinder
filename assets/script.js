const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalSpan = document.getElementsByClassName("close-modal");

openModalButton.addEventListener("click", function() {
    modal.classList.remove("hidden");
});

// closeModalSpan.addEventListener("click", function() {
//     modal.classList.add("hidden");
// });

//  ****AARON SPOON CODE

// function getsource(id){
//     $.ajax({
//     url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=91ca1bbf73cc47f8bb9b7df0e16f5855",
//     success:function(res){
//         document.getElementById("sourceLink")InnerHTML=res.sourceUrl
//         document.getElementById("sourceLink").href=res.sourceUrl
//     }
//     });
//     }
//     function getrecipe(q){
//         $.ajax({
//             url:`https://api.spoonacular.com/recipes/search?apiKey=91ca1bbf73cc47f8bb9b7df0e16f5855&number=3&query="+q{ingredient1}+${ingredient2}+${ingredient3}',
//         success: function(res){
//             document.getElementById("output").innerHTML="<h1>"+res.results[0].title+</h1><br><img src='""+res.baseUri+res.results[0].image"'+width='400'
//         }})
//     }


// ****JIM YOUTUBE CODE



// const searchTerms = ["fish","bacon", "broccoli"];

// const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];

// const YOUTUBE_API_KEY = "";

// added dynamic searches into API request
const searchHandler = (e)=>{
    e.preventDefault()
    console.log("searching")
    const ingredient1 = document.getElementById("ingredient1").value
    const ingredient2 = document.getElementById("ingredient2").value
    const ingredient3 = document.getElementById("ingredient3").value
    const ingredients = [ingredient1,ingredient2, ingredient3] ;

    console.log(ingredients)
    // const url = `https://api.spoonacular.com/recipes/?apiKey=444f40431ebe48f792441b4ccde7ecca&findByIngredients?ingredients=${ingredient1},${ingredient2},${ingredient3}&number=2` ;


     

  


    const url = `https://api.spoonacular.com/recipes/search?apiKey=444f40431ebe48f792441b4ccde7ecca&number=3&includeIngredients="${ingredient1},${ingredient2},${ingredient3}` ;
  
  










    const youtubeurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${ingredient1}+${ingredient2}+${ingredient3}&key=AIzaSyCTDKpNNSBmISaHBE4GB_8ibaWi7_bt7-Q`;

        

fetch(url)
  .then(response => response.json())
  .then(data => {
    fetch(youtubeurl)
    .then(response => response.json())
    .then(data =>{

      const resultsh3 = document.getElementById("results")
    for (i=0; i<3; i++){
      console.log(data)
      const videoTitle = data.items[i].snippet.title
      const videoURL = `https://www.youtube.com/watch?v=${data.items[i].id.videoId }`
     

      //Make the htmal to store info

      const nameHtml = document.createElement("h3")
      const nameURL = document.createElement("h5")
      // const nameImage = document.createElement("img")

      
      //Put the info into html
      // nameImage.setAttribute("src", dishImage)
      nameHtml.textContent = videoTitle
      nameURL.textContent = videoURL
      // nameImage.textContent = dishImage

      //append the newly created html element

      resultsh3.append(nameHtml, nameURL,)
    }

      console.log(data)
    })

    // store refence to and existing point on the page
    console.log(data)
    const resultsh2 = document.getElementById("results")
    for (i=0; i<3; i++){
        const dishName = data.results[i].title
        const dishURL = data.results[i].sourceUrl
        // const dishImage = data.results[i].image

        //Make the htmal to store info

        const nameHtml = document.createElement("h3")
        const nameURL = document.createElement("h5")
        // const nameImage = document.createElement("img")

        
        //Put the info into html
        // nameImage.setAttribute("src", dishImage)
        nameHtml.textContent = dishName
        nameURL.textContent = dishURL
        // nameImage.textContent = dishImage

        //append the newly created html element

        resultsh2.append(nameHtml, nameURL, )
    }

  
    console.log(data);

//     document.querySelector(".iframeClass").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});
}
const searchButton5= document.getElementById("submit")
searchButton5.addEventListener("click",searchHandler)




// SET AND GET FROM LOCAL STORAGE 

// const ingredients = {ingredient1,ingredient2,ingredient3}


// localStorage.url = 
// localStorage.getItem("url")
// document.getElementById("youtubeResult").innerHTML = localStorage.getItem("url");