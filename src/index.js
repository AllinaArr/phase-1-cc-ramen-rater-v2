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
  let formNewRamen = document.querySelector("#new-ramen");

  formNewRamen.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameofANewRamen = document.querySelector("#new-name").value;
    let nameOfANewRest = document.querySelector("#new-restaurant").value;
    let newImageLink = document.querySelector("#new-image").value;
    let newRating = document.querySelector("#new-rating").value;
    let newComment = document.querySelector("#new-comment").value;

    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nameofANewRamen,
        restaurant: nameOfANewRest,
        image: newImageLink,
        rating: newRating,
        comment: newComment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
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

  addSubmitListener();
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
