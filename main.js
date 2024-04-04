import "./style.scss";

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    items.forEach((el, i) => {
      if (i !== index) {
        el.classList.toggle("inactive");
      }
    });
  });
});
