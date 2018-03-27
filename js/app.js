
const select = (selector) => document.querySelector(selector)

const addListener = (element, action, cb) => {
    select(element).addEventListener(action, cb)
    console.log('salaaaam');
}

function fetch(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }
  xhr.open('GET', url)
  xhr.send();
}



//render the section of dbmovie api

addListener('.search-btn','click', function (e) {
  e.preventDefault();
  var form = e.target;
  var searchInput = document.getElementsByClassName('search-query')[0];
    var result = document.getElementsByClassName('search-results')[0];

  var url  = 'https://api.themoviedb.org/3/search/movie?api_key=3a99b393e6338e1dc704ecf597ce5001&language=en-US&query='+ searchInput.value;
  fetch(url, (response) => {
    document.getElementsByClassName('search-query')[0].value = '';
     document.getElementById('thisisID').innerHTML = "";
console.log(response);
    var data = response.results[0];
        console.log(data,'salaaaam');
     const span1 =  document.createElement("span");
     span1.setAttribute('class','span1');

     const text =  document.createElement("h1");
     text.setAttribute('class','title');

  text.textContent = data.title;
  result.appendChild(text);
     span1.setAttribute('class','span1');

const overview = document.createElement('span');
overview.textContent = "Overview: ";
overview.setAttribute('class','overview');
result.appendChild(overview);

const vote = document.createElement('span');
vote.textContent = "vote average: ";
vote.setAttribute('class', 'overview');




     const span2 =  document.createElement("span");
     span2.setAttribute('class','span2');

     const image =  document.createElement("img");
     image.setAttribute('class','image1');


     image.src = 'http://image.tmdb.org/t/p/w185//'+data.poster_path;

    span1.textContent = data.overview;
    span2.textContent = data.vote_average;
    result.appendChild(span1);
    linebreak = document.createElement("br");
    result.appendChild(linebreak);
    result.appendChild(vote);

    result.appendChild(span2);

    linebreak1 = document.createElement("br");

      result.appendChild(linebreak1);

    result.appendChild(image);

  })
})






// render the wikipeida section




// (extra)render the book info section
