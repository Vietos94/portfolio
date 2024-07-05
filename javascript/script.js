const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector("#myDropdown");

hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    hamburger.classList.toggle("is-active");
    dropdown.classList.toggle("show");
});
  
window.onclick = function(event) {
    if (!event.target.matches('.hamburger')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            hamburger.classList.remove("is-active");
        }
    }
};