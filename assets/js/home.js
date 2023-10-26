$(document).ready(function () {
  //Sidebar
  let sidebar = document.querySelector(".sidebar");
  let closeButton = document.querySelector(".sidebar .close-part .close");
  let openButton = document.querySelector("#nav-phone .container .logo i");

  openButton.addEventListener("click", function () {
    sidebar.classList.add("active-bar");
    sidebar.classList.remove("hide");
  });

  closeButton.addEventListener("click", function () {
    sidebar.classList.add("hide");
    sidebar.classList.remove("active-bar");
  });

  
});
