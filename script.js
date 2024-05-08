let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const toggleBtn = document.querySelector('.toggle_btn'); 
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropMenu = document.querySelector('.dropmenu');

toggleBtn.onclick = function () {
  dropMenu.classList.toggle('open')
  const isOpen = dropMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'bx bx-x'
  : 'bx bx-menu'
}

let text = document.getElementById('text');
let gaurentee = document.getElementById('gaurantee');
let container = document.getElementById('container');
window.addEventListener('scroll', () =>{
  let value = window.scrollY;

  text.style.marginTop = value * -1.5 + 'px';
  gaurantee.style.marginTop = value * -0.5 + 'px';
  container.style.marginBottom = value * 1.5 + 'px';
})

const openBtn = document.getElementById('contact');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});