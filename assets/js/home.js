$(document).ready(function () {
  
   //The wowjs
   new WOW().init();
  
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

  //Events Tab-Menu
  let tabMenu = document.querySelectorAll("#events .tab-menu .tab");
  let menu = document.querySelectorAll("#events .menu");
  tabMenu.forEach((eachTabMenu) => {
    eachTabMenu.addEventListener("click", function (e) {
      document.querySelector(".active-tab").classList.remove("active-tab");
      this.classList.add("active-tab");

      menu.forEach((eachMenu) => {
        if (this.getAttribute("data-id") == eachMenu.getAttribute("data-id")) {
          eachMenu.classList.remove("d-none");
        } else {
          eachMenu.classList.add("d-none");
        }
      });
    });
  });



  //Menu Tab-Menu
  let foodTab=document.querySelectorAll("#menu .tab-menu .tab");
  let food =document.querySelectorAll("#menu .food");

  foodTab.forEach((eachTabFood) => {
    eachTabFood.addEventListener("click", function (e) {
      document.querySelector(".active-tab").classList.remove("active-tab");
      this.classList.add("active-tab");

      food.forEach((eachFood) => {
        if (this.getAttribute("data-id") == eachFood.getAttribute("data-id")) {
          eachFood.classList.remove("d-none");
        } else {
          eachFood.classList.add("d-none");
        }
      });
    });
  });


   //Scroll to top button
   let scrollBtn = document.querySelector("#scrollBtn .btn");
   scrollBtn.addEventListener("click", function (e) {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   });
 
   window.addEventListener("scroll", function (e) {
     if (this.window.scrollY >= 376.5) {
       scrollBtn.style.opacity = 1;
     } else {
       scrollBtn.style.opacity = 0;
     }
   });








});
