var app = functions1;

const select = (selector) => document.querySelector(selector)

const addListener = (element, action, cb) => {
  select(element).addEventListener(action, cb)
  console.log('salaaaam');
}

//render the section of dbmovie api


addListener('.search-btn', 'click', function(e) {
  e.preventDefault();
  var form = e.target;
  var searchInput = select('.search-query');

  if (searchInput.value === "") {
    alert('Please add movie name!');
  }
  var result = select('.search-results');
  var url = "https://api.themoviedb.org/3/search/movie?api_key=3a99b393e6338e1dc704ecf597ce5001&language=en-US&query=" + searchInput.value;
  app.fetch(url, (response) => {
    select('.search-query').value = '';
    select('#searchResults').innerHTML = "";

    var data = response.results[0];
    if (data == null) {
      alert('No results for the movie name you entered!');
    } else {



      //span1 for ovreview
      const span1 = document.createElement("span");
      span1.setAttribute('class', 'span1');
      span1.textContent = data.overview;



      //title
      const text = document.createElement("h1");
      text.setAttribute('class', 'title');
      text.textContent = data.title;



      // overview:
      const overview = document.createElement('span');
      overview.textContent = "Overview: ";
      overview.setAttribute('class', 'overview');


      //vote range:
      const vote = document.createElement('span');
      vote.textContent = "vote average: ";
      vote.setAttribute('class', 'overview');


      //span2
      const span2 = document.createElement("span");
      span2.setAttribute('class', 'span2');
      span2.textContent = data.vote_average;

      //image
      const image = document.createElement("img");
      image.setAttribute('class', 'image1');
      image.src = 'http://image.tmdb.org/t/p/w185//' + data.poster_path;


      //breaks
      linebreak = document.createElement("br");
      linebreak1 = document.createElement("br");




      //divLeft
      divLeft = document.createElement('div');
      divLeft.setAttribute('class', 'divLeft');
      divLeft.appendChild(image);
      result.appendChild(divLeft);


      //divRight
      divRight = document.createElement('div');
      divRight.setAttribute('class', 'divRight');
      divRight.appendChild(text);
      divRight.appendChild(overview);
      divRight.appendChild(span1);
      divRight.appendChild(linebreak);
      divRight.appendChild(linebreak1);
      divRight.appendChild(vote);
      divRight.appendChild(span2);
      result.appendChild(divRight);


    }


  })

})





// render the wikipeida section




// (extra)render the book info section
