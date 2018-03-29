const test = require('tape');
const app = require('../public/js/app.js');
const response = {
    "page": 1,
    "total_results": 45,
    "total_pages": 3,
    "results": [{
        "vote_count": 487,
        "id": 26428,
        "video": false,
        "vote_average": 6.9,
        "title": "Agora",
        "popularity": 9.062908,
        "poster_path": "/hZcl4TuZYTNWztIP8Zpvr6YLxiY.jpg",
        "original_language": "en",
        "original_title": "Agora",
        "genre_ids": [
            12,
            18,
            36
        ],
        "backdrop_path": "/vxsR4pjm8VNFrywz9TQLj3loxNB.jpg",
        "adult": false,
        "overview": "A historical drama set in Roman Egypt, concerning philosopher Hypatia of Alexandria and her relationship with her slave Davus, who is torn between his love for her and the possibility of gaining his freedom by joining the rising tide of Christianity.",
        "release_date": "2009-05-17"
    }]
}

test('movies information', (t) => {

    const actual = app.getMovieInfo(response);
    const expected = {
        name: "Agora",
        overview: "A historical drama set in Roman Egypt, concerning philosopher Hypatia of Alexandria and her relationship with her slave Davus, who is torn between his love for her and the possibility of gaining his freedom by joining the rising tide of Christianity.",
        rate: 6.9,
        poster: 'http://image.tmdb.org/t/p/w185///hZcl4TuZYTNWztIP8Zpvr6YLxiY.jpg'
    }
    t.deepEqual(actual, expected, 'should return an object of the movie info');
    t.end();
})