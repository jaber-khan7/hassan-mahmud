// const showMore = document
//   .getElementById("show-more")
//   .addEventListener("click", function () {
//     const toggleContent = document.getElementById("portfolio-toggle-container");
//     toggleContent.style.visibility = "visible";
//     const mainSection = document.getElementById("main");
//     mainSection.textContent = "";
//     const carouselSection = document.getElementById("carousel");
//     carouselSection.textContent = "";
//   });

// show more porjects

const showMoreButtons = document.getElementsByClassName("show-more");
for (const showmoreButton of showMoreButtons) {
  showmoreButton.addEventListener("click", function () {
    const toggleContent = document.getElementById("portfolio-toggle-container");
    toggleContent.style.visibility = "visible";
    document.getElementById("toggle-content").style.display = "block";
    const mainSection = document.getElementById("main");
    mainSection.style.display = "none";
    const carouselSection = document.getElementById("carousel");
    carouselSection.style.display = "none";
  });
}

// hide content

const hideContent = document
  .getElementById("go-to-back")
  .addEventListener("click", function () {
    const toggleContent = document.getElementById("portfolio-toggle-container");
    toggleContent.style.visibility = "hidden";
    document.getElementById("toggle-content").style.display = "none";
    const mainSection = document.getElementById("main");
    mainSection.style.display = "block";
    const carouselSection = document.getElementById("carousel");
    carouselSection.style.display = "block";
  });

const quickLookButtons = document.getElementsByClassName("quick-look");
for (const quickLookButton of quickLookButtons) {
  quickLookButton.addEventListener("click", function () {
    const projectToggle = document.getElementById("toggle-container-project");
    projectToggle.style.visibility = "visible";
    document.getElementById("toggle-content").style.display = "none";
    document.getElementById("portfolio-toggle-container").textContent = "";
  });
}

// change content of pricing section by clicking button
// static section
function packageStatic() {
  const packagePrice = document
    .getElementById("static")
    .addEventListener("click", function () {
      const priceSectionHeader = (document.getElementById(
        "basic-price-header"
      ).innerHTML = `Make Your Single Page`);

      const packagePrice = (document.getElementById(
        "price-package"
      ).innerHTML = `30.00`);

      const pricingSectionTextP = (document.getElementById(
        "pricing-section-text-p"
      ).innerHTML = `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`);
    });
}
packageStatic();

// standard section
function packageStandard() {
  const packagePrice = document
    .getElementById("standard")
    .addEventListener("click", function () {
      const priceSectionHeader = (document.getElementById(
        "basic-price-header"
      ).innerHTML = `Design Make this Page`);

      const packagePrice = (document.getElementById(
        "price-package"
      ).innerHTML = `45.00`);

      const pricingSectionTextP = (document.getElementById(
        "pricing-section-text-p"
      ).innerHTML = `Making this the first true generator on the Internet. It uses a dictionary & plugin Development.`);
    });
}
packageStandard();

// premium section
function packagePremium() {
  const packagePrice = document
    .getElementById("premium")
    .addEventListener("click", function () {
      const priceSectionHeader = (document.getElementById(
        "basic-price-header"
      ).innerHTML = `Customize Your Single Page`);

      const packagePrice = (document.getElementById(
        "price-package"
      ).innerHTML = `70.00`);

      const pricingSectionTextP = (document.getElementById(
        "pricing-section-text-p"
      ).innerHTML = `I will install your desire theme and made like Theme demo and customize your single page( homepage)`);
    });
}
packagePremium();

// testimonial section
// left arrow buttons
const leftArrow = () => {
  // set event handler to display testmonial one
  const rightArrow = document
    .getElementById("arrow-left")
    .addEventListener("click", function () {
      // when click the left arrow button the testimonial one section will be hide
      const testimonialOne = document.getElementById("client-message-1");
      testimonialOne.style.display = "block";

      // when click the left arrow button the testimonial tow section will be visible
      const testmonialTwo = document.getElementById("client-message-2");
      testmonialTwo.style.display = "none";

      // set background for radio button one
      const radioOne = (document.getElementById(
        "button-1"
      ).style.backgroundColor = "black");

      // set background for radio button two
      const radioTwo = (document.getElementById(
        "button-2"
      ).style.backgroundColor = "#fff");
    });
};

// set event handler to display testmonial two
const rightArrow = () => {
  const arrowRight = document
    .getElementById("arrow-right")
    .addEventListener("click", function () {
      // when click the left arrow button the testimonial one section will be hide
      const testimonialOne = document.getElementById("client-message-1");
      testimonialOne.style.display = "none";

      // when click the left arrow button the testimonial tow section will be visible
      const testmonialTwo = document.getElementById("client-message-2");
      testmonialTwo.style.display = "block";

      // set background for radio button one
      const radioOne = (document.getElementById(
        "button-1"
      ).style.backgroundColor = "#fff");

      // set background for radio button two
      const radioTwo = (document.getElementById(
        "button-2"
      ).style.backgroundColor = "black");
    });
};
leftArrow();
rightArrow();
