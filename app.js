// FEATURES DROPDOWN

const featuresButton = document.querySelector("#features");
const featuresDropdown = document.querySelector("#features-dropdown");
const featuresArrow = document.querySelector("#features-arrow");

featuresButton.addEventListener("click", () => {
  featuresDropdown.classList.toggle("active-hidden-features");
  featuresArrow.classList.toggle("arrow-up-features");
  featuresArrow.classList.toggle("arrow-down-features");
});

// COMPANY DROPDOWN

const companyButton = document.querySelector("#company");
const companyDropdown = document.querySelector("#company-dropdown");
const companyArrow = document.querySelector("#company-arrow");

companyButton.addEventListener("click", () => {
  companyDropdown.classList.toggle("active-hidden-company");
  companyArrow.classList.toggle("arrow-up-company");
  companyArrow.classList.toggle("arrow-down-company");
});
