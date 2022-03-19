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
