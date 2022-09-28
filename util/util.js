export default function notify(text) {
  let notifyContainer = document.querySelector(".notify-container");
  let notifyText = document.querySelector(".notify-text");
  let animationDuration = Number(
    getComputedStyle(notifyContainer).animationDuration.replace("s", "")
  );
  // console.log(animationDuration);
  notifyText.innerHTML = text;
  notifyContainer.style.display = "flex";
  setTimeout(() => {
    notifyContainer.style.display = "none";
  }, animationDuration * 1000);
}
