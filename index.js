let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);
    if (left <= 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

function moveDodgerUp() {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(upNumbers, 10);
    if (bottom <= 380) {
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

function moveDodgerDown() {
    let downNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(downNumbers, 10);
    if (bottom >= 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key == "ArrowRight"){
        moveDodgerRight();
    }
    if (e.key == "ArrowUp"){
        moveDodgerUp();
    }
    if (e.key == "ArrowDown"){
        moveDodgerDown();
    }
  });

  done()
