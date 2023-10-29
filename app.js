// FEATURES DROPDOWN

const featuresButton = document.querySelector("#features");
const featuresDropdown = document.querySelector("#features-dropdown");
const featuresArrow = document.querySelector("#features-arrow");

featuresButton.addEventListener("click", () => {
  featuresDropdown.classList.toggle("active-hidden-features");
  featuresArrow.classList.toggle("arrow-up");
  featuresArrow.classList.toggle("arrow-down");
});
