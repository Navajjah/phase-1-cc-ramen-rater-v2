// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const detailImage = document.querySelector(".detail-image");
  const ramenName = document.querySelector(".name");
  const ramenRestaurant = document.querySelector(".restaurant");
  const ramenRating = document.querySelector("#rating-display");
  const ramenComment = document.querySelector("#comment-display");
  
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;

};

const addSubmitListener = () => {
  // Add code
  const form = document.querySelector("#new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      name: document.querySelector("#new-name").value,
      restaurant: document.querySelector("#new-restaurant").value,
      image: document.querySelector("#new-image").value,
      rating: document.querySelector("#new-rating").value,
      comment: document.querySelector("#new-comment").value,
    };

    const ramenMenu = document.querySelector("#ramen-menu");
    const newImg = document.createElement("img");
    newImg.src = newRamen.image;
    newImg.alt = newRamen.name;

    newImg.addEventListener('click', () => handleClick(newRamen));

    ramenMenu.appendChild(newImg);

    form.reset();
  });
}

const displayRamens = () => {
  // Add code
   return fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then(data => {
    console.log(data);
    const ramenMenu = document.querySelector("#ramen-menu");

    data.forEach(ramen => {
      const img = document.createElement("img")
      img.src = ramen.image;
      img.alt = ramen.name;

      img.addEventListener("click", () => handleClick(ramen));

      ramenMenu.appendChild(img);

    });

    handleClick(data[0]);

    return data;
  })
  .catch(error => {
    console.error("Error fetching ramen data:", error);
    return;
  });
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
};
main();



// Export functions for testing
//module.exports = {
  //displayRamens,
  //addSubmitListener,
  //handleClick,
  //main,
//};
