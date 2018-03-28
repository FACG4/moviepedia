 
var functions1 = {

  fetch: function(url, callback) {
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
}



if (typeof module !== 'undefined') {
  module.exports = functions1;
}




//render the section of dbmovie api




// render the wikipeida section




// (extra)render the book info section
