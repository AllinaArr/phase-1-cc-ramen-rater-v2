// index.js
let imgInfo = document.querySelector(".detail-image");
let ratingDisplay = document.querySelector("#rating-display");
let commentDisplay = document.querySelector("#comment-display");
let nameOfMeal = document.querySelector(".name");
let nameOfRest = document.querySelector(".restaurant");
let ramenMenu = document.querySelector("#ramen-menu");

// Callbacks
const handleClick = (ramen) => {
  // Add code
  ramenMenu.addEventListener("click", (event) => {
    fetch(`http://localhost:3000/ramens/${event.target.id}`)
      .then((response) => response.json())
      .then((data) => {
        imgInfo.src = `${data.image}`;
        imgInfo.alt = `${data.name}`;
        nameOfMeal.textContent = `${data.name}`;
        nameOfRest.textContent = `${data.restaurant}`;
        ratingDisplay.textContent = `${data.rating}`;
        commentDisplay.textContent = `${data.comment}`;
      });
  });
};

const addSubmitListener = () => {
  // Add code
};

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((menu) => {
      menu.forEach((ramen) => {
        const ramenImg = document.createElement("img");
        ramenImg.src = `${ramen.image}`;
        ramenImg.id = `${ramen.id}`;
        ramenMenu.append(ramenImg);
      });
    });
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  handleClick();
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
