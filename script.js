const btn = document.querySelector(".bytton");

btn.addEventListener("click", () => {
  gtag("event", "user_clicked_on_a_button");
  console.log("user pressed the buttoning");
})
