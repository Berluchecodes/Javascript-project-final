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

function showLoadingSpinner() {
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.style.display = "block";

  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.style.display = "none";
}

// Function to hide the loading spinner
function hideLoadingSpinner() {
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.style.display = "none";

  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.style.display = "block";
}


// Function to fetch movies from api
async function fetchMovies(searchTerm) {
    const apiKey = "51c50cf3";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
  
    try {
      showLoadingSpinner() 
      const response = await fetch(url);
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));

      hideLoadingSpinner();
  
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
      movieElement.classList.add("movie-container");
  
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
      const moviesContainer = document.getElementById("movies-container");
      moviesContainer.style.display = "block";
      showLoadingSpinner();
      const movies = await fetchMovies(searchTerm);
      hideLoadingSpinner
      displayMovies(movies);

    }
  });

  




