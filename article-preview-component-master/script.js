// Desktop Share Toggle
const desktopShareBtn = document.getElementById("desktopShareBtn")

desktopShareBtn.addEventListener("click", toggleDesktopShare)

function toggleDesktopShare() {
  const sharePopup = document.querySelector(".share__popup")
  sharePopup.classList.toggle("hidden")
}

// Mobile Share Toggle
const mobileAuthor = document.querySelector(".mobile-author")
const mobileShareBar = document.querySelector(".mobile-share__bar")
const mobileShareBtn = document.querySelector(".mobile-share__btn")

mobileShareBtn.addEventListener("click", function() {
  mobileAuthor.style.display = "none"
  mobileShareBar.style.display = "flex"
})

const mobileShareClose = document.querySelector(".mobile-share__close")

mobileShareClose.addEventListener("click", function() {
  mobileAuthor.style.display = "flex"
  mobileShareBar.style.display = "none"
})
