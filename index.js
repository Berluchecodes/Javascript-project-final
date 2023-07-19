// EXPLORE BTN
const exploreBtn = document.querySelector(".explore__btn");
exploreBtn.addEventListener("click", () => {
  const currentLocation = window.location;
  let moviesUrl;

  if (currentLocation.hostname === "localhost" || currentLocation.hostname === "127.0.0.1") {
    // Development environment
    moviesUrl = "http://127.0.0.1:5500/movies.html";
  } else {
    // Production environment (GitHub, Vercel, etc.)
    moviesUrl = `${currentLocation.origin}/path/to/movies.html`;
  }

  window.location.href = moviesUrl;
});


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