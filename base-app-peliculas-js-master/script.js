document.getElementById('searchButton').addEventListener('click', searchMovies );

let api_key = 'eb1636c9926bac08a9b7c83015747d09';
let url_base = 'https://api.themoviedb.org/3/search/movie'
let url_img = 'https://image.tmdb.org/t/p/w500'

let resultContainer = document.getElementById('results');

function searchMovies(){
    resultContainer.innerHTML = 'Cargando...';

    let searchInput = document.getElementById('searchInput').value;

    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))

}

function displayMovies(movies){
    resultContainer.innerHTML = '';

    if(movies.length === 0){
        resultContainer.innerHTML = '<h2>No existe películas con este nombre</h2>';
        return;
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = movie.release_date;

        let overview = document.createElement('p');
        overview.textContent = movie.overview;

        let posterPath = url_img + movie.poster_path;
        let poster = document.createElement('img');
        poster.src = posterPath;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);

        resultContainer.appendChild(movieDiv);
        

    });

}