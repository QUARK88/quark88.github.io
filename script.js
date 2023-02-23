/*General JavaScript For Quark#1916's Personal Page*/
/*Swaps Between Sections*/
function showSection(sectionNumber) {
  var sections = document.querySelectorAll(".section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  var section = document.querySelector("#section" + sectionNumber);
  section.classList.add("active");
}
