// use window.onload to only execute script after DOM is ready
// script listens for a click on any image in gallery, then creates modal popout with enlarged image when you click on image
window.onload = function () {
  let modal = document.getElementById("myModal");
  let images = document.getElementsByClassName("gallery-img");
  let modalImg = document.getElementById("modal-img");
  let captionText = document.getElementById("caption");

  for (var i = 0; i < images.length; i++) {
    // get the image and insert it inside the modal - use its "alt" text as a caption
    let img = images[i];
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  }

  // get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // when the user clicks on <span> (the x button), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
};
