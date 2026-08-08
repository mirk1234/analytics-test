const btn = document.querySelector(".event-btn");

btn.addEventListener("click", () => {
  gtag("event", "button_click", {
    event_category: "interaction",
    event_label: "user_clicked_on_a_button"
  });
  console.log("user pressed the button");
});
