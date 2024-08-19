document.addEventListener("DOMContentLoaded", () => {
  const bounce = document.querySelector(".bounce");
  const back = document.querySelector(".back");
  const header = document.querySelector(".header");
  const sectionPt = document.querySelector(".pt28");

  bounce.addEventListener("click", () => {
    header.classList.add("top-0");
    bounce.classList.add("hidden");
    sectionPt.classList.add("pt-28");
  });

  back.addEventListener("click", () => {
    bounce.classList.remove("hidden");
    header.classList.remove("top-0");
    sectionPt.classList.remove("pt-28");

    header.classList.add("-top-[120px]");
    bounce.classList.add("block");
  });

  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");

  function clock() {
    const timeNow = new Date();
    const hr = timeNow.getHours();
    const min = timeNow.getMinutes();
    hour.textContent = hr < 10 ? "0" + hr : hr;
    minute.textContent = min < 10 ? "0" + min : min;
  }
  clock();
  setInterval(clock, 1000);
});
