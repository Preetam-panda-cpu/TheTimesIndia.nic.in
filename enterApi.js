 let entertainmentApi=
    "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=80de1753dd87409aa7aaeff89d341e0d";

/*===================entertainment section starts here*==================================*/
window
  .fetch(entertainmentApi)
  .then(entertainmentData => {
    entertainmentData
      .json()
      .then(entertainment => {
        console.log(entertainment.articles);
        let entertainmentFeed = entertainment.articles;
        let output = [];
        for (let enter of entertainmentFeed) {
            console.log(enter);
            let date = new Date(enter.publishedAt).toDateString();
          output += `
              
                <div class="row">
                <div class="col-md-5">
                <img src="${enter.urlToImage}"class="enterImg"/>
                </div>
               <div class="col-md-7">
                <ul class="list-group">
                <a href="${enter.url}" target="_blank">
                <li class="text-dark">
                ${enter.title}</li></a>
                <span class="text-muted text-right">publishedAt : ${date}</span>
                </ul>
                </div>
                </div>
                `;
                document.getElementById("entertaimentAllTemplate").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*===================entertainment section ends here*==================================*/