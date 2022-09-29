import loaderIcon from "../imgs/loader.png";

export default function notify(text, type) {
  let notifyContainer = document.querySelector(".notify-container");
  let notifyText = document.querySelector(".notify-text");
  let animationDuration = Number(
    getComputedStyle(notifyContainer).animationDuration.replace("s", "")
  );

  notifyText.innerHTML = text;
  let loaderImg = document.createElement("img");
  if (type === "promise") {
    loaderImg.setAttribute("src", "https://i.imgur.com/DUHSwdE.png");
    loaderImg.setAttribute("height", "20");
    loaderImg.setAttribute("width", "20");
    loaderImg.setAttribute("alt", "loader icon");
    loaderImg.classList.add("loader-img");
    notifyContainer.append(loaderImg);
  }
  // console.log(animationDuration);
  notifyContainer.style.display = "flex";
  setTimeout(
    () => {
      notifyContainer.style.display = "none";
      type === "promise" && notifyContainer.removeChild(loaderImg);
    },
    type === "promise" ? 15000 : animationDuration * 1000
  );
}
