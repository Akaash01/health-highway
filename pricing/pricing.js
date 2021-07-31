const optionhandler = () => {
  for (let i = 0; i < pricelabel.length; i++) {
    const y = pricelabel[i].parentElement.parentElement;
    if (pricelabel[i].checked) {
      for (let j = 0; j < pricelabel.length; j++) {
        const z = pricelabel[j].parentElement.parentElement;
        z.classList.remove("session-item-active");
      }
      y.classList.add("session-item-active");
    }
  }
};

const pricelabel = document.querySelectorAll(".p-label input");
const x = document.querySelectorAll(".p-label input");
x.forEach((element) => {
  element.addEventListener("click", optionhandler);
});
