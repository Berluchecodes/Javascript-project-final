// LOADING STAGE





// BTN MENU
function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}



// CONTRAST BTN
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}



// Function to fetch movies from api
async function fetchMovies(searchTerm) {
    const apiKey = "51c50cf3";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return data.Search;
    } catch (error) {
      console.log("Error fetching movies:", error);
      return [];
    }
  }



  // Function to display movies on the HTML page
  function displayMovies(movies) {
    const moviesContainer = document.querySelector(".movies");
    moviesContainer.innerHTML = "";
  
    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
  
      movieElement.innerHTML = `
        <figure class="movie__poster--wrapper">
          <img class="movie__poster" src="${movie.Poster}" alt="" />
        </figure>
        <div class="movie__title">Title: ${movie.Title}</div>
        <div class="movie__year">Year: ${movie.Year}</div>
        <div class="movie__imdbid">imbID: ${movie.imdbID}</div>
        <div class="movie__type">Type: ${movie.Type}</div>
      `;
  
      moviesContainer.appendChild(movieElement);
    });
  }
  
// Function to search movies with search btn
  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
  
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim();
  
    if (searchTerm) {
      const movies = await fetchMovies(searchTerm);
      displayMovies(movies);
    }
  });





