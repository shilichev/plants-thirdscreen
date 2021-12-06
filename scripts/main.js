function onClickEvent() {
  window.location.href =
    "https://apps.apple.com/by/app/plantme-plant-identification/id1532875668";
}
function addEvent() {
  document.getElementById("button__first-screen").addEventListener("click", function () {
    onClickEvent();
  });
  document.getElementById("button__second-screen").addEventListener("click", function () {
    onClickEvent();
  });
  document.getElementById("button__third-screen").addEventListener("click", function () {
    onClickEvent();
  });
}

function documentReady() {
  addEvent();
}

documentReady();
