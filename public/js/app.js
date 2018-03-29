function getMovieInfo(response) {
  const data = response.results[0];
  const movieInfo = {};
  movieInfo.name = data.title;
  movieInfo.overview = data.overview;
  movieInfo.rate = data.vote_average;
  movieInfo.poster = 'http://image.tmdb.org/t/p/w185//'+ data.poster_path;
  return movieInfo;
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

if (typeof module !== 'undefined') {
  module.exports = {getMovieInfo};
}