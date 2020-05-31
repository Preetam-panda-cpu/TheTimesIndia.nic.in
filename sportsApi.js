    let SportsApiUrl = 
    "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=80de1753dd87409aa7aaeff89d341e0d";
   
    let healthApi = 
    "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=80de1753dd87409aa7aaeff89d341e0d";

    let businessApi = 
    "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=80de1753dd87409aa7aaeff89d341e0d";

    let technologyApi =
    "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=80de1753dd87409aa7aaeff89d341e0d";

    let scienceApi = 
    "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=80de1753dd87409aa7aaeff89d341e0d";


 /*====================================sports section starts here====================================*/
window
  .fetch(SportsApiUrl)
  .then(data => {
    data
      .json()
      .then(sportsnews => {
        console.log(sportsnews);
        let sportsData = sportsnews.articles;
        let output = "";
        for (let sports of sportsData) {
          output += `
              
                <h1 class="h1Title"><a href="${sports.url}" target=_blank>${sports.title}</a></h1>
                <p>${sports.description}</p>
                <img src="${sports.urlToImage}" />
                <p>${sports.publishedAt}</p>
            `;
        }

        document.getElementById("sportSection").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
  /*====================================sports section ends here====================================*/

  