const select = (selector) => document.querySelector(selector);

const addListener = (element, action, cb) => {
    select(element).addEventListener(action, cb)
}

const createElements = (element, content, attrName , attrValue) => {
    const elm = document.createElement(element)
    elm.textContent = content;
    elm.setAttribute(attrName, attrValue);
    return elm;
}

const appendElements = (arr, parent) => {
    arr.map((elm) => {
        parent.appendChild(elm);
    });
};


addListener('#search_form','submit', function (e) {
    e.preventDefault();
    const searchInput = select('#searchQuery');
    const result = select('#searchResults');
    const movieImage = select('#movieImage');
    let url  = `https://api.themoviedb.org/3/search/movie?api_key=3a99b393e6338e1dc704ecf597ce5001&language=en-US&query='${searchInput.value}`;
  
    fetch(url, (response) => {
        searchInput.value = '';
        result.innerHTML = '';
        movieImage.innerHTML = '';

        if (!response.results[0]) {
            select('#giffy').innerHTML = '';
            alert('No results for the movie name you entered!');
        }
      
        const movieInfo = getMovieInfo(response);
        // (function render() {            
        const obj1 = {
            movieName: createElements('h2',movieInfo.name, 'class', 'movie-title'),
            description: createElements('h3','The Movie Story'),
            summary: createElements('p',movieInfo.overview, 'class', 'summary'),
            rate_lable: createElements('h3', "Movie Rate"),
            rate: createElements('p', movieInfo.rate),
        };
        appendElements(Object.values(obj1), result);
        // })()
        const img = createElements('img','' , 'src', movieInfo.poster);
        img.setAttribute('class', 'poster');
        movieImage.appendChild(img);

        // the giphy Api
        const giffy_url = `https://api.giphy.com/v1/gifs/search?q=${movieInfo.name.replace(/\s+/g, '+')}&api_key=BslWn4QgtcM8iJuzNm0jUNFvF4VqFQmU&limit=5`;
        fetch(giffy_url, (response) => {
            const giphy = select('#giffy');
            giphy.innerHTML ="";
            const objects = response.data;
            const imgUrls =  objects.map((object, i) => {
                const gif = document.createElement('img');            
                gif.src = object.images.fixed_height_downsampled.url;
                gif.className = 'gif'
                giphy.appendChild(gif);
                return object.images.downsized_medium.url
            });
        });
    });
});




// const imdb_url = `http://www.omdbapi.com/?t=${}&apikey=7b6cfcf4`;