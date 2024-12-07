function myFunction() {
  var navbar = document.getElementById("navbar");
  var icon = document.getElementById("menu-icon");

  if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "block";
  } else {
      navbar.style.display = "none";
  }

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
}

function toggleNavbar(event) {
  event.stopPropagation();
  myFunction();
}

function closeNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.style.display === "block") {
      navbar.style.display = "none";
      var icon = document.getElementById("menu-icon");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
  }
}

document.getElementById("menu-icon").addEventListener("click", toggleNavbar);
document.getElementById("menu-icon").addEventListener("touchend", toggleNavbar);

document.body.addEventListener("click", closeNavbar);
document.body.addEventListener("touchend", closeNavbar);

document.getElementById("navbar").addEventListener("click", function(event) {
  event.stopPropagation();
});

document.getElementById("navbar").addEventListener("touchend", function(event) {
  event.stopPropagation();
});