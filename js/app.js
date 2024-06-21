window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.querySelector(".go-to-top").style.display = "block";
  } else {
    document.querySelector(".go-to-top").style.display = "none";
  }
});
