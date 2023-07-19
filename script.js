function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollPage(e) {
  console.log(e)
}
document.getElementById('profile').addEventListener('mouseenter', handleMouseMove);
document.getElementById('about').addEventListener('mouseenter', handleMouseMove);
document.getElementById('experience').addEventListener('mouseenter', handleMouseMove);
document.getElementById('Qualifications').addEventListener('mouseenter', handleMouseMove);
document.getElementById('projects').addEventListener('mouseenter', handleMouseMove);
document.getElementById('contact').addEventListener('mouseenter', handleMouseMove);
function handleMouseMove(event) {
  console.log(event.target)
  if (event?.target) {
    location.href = `./#${event.target.id}`
  }


}
