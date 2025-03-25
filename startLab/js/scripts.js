const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");


// show the dialog button, opens the dialog modally
openButton1.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `One Apple contains 95 calories`
});

openButton2.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `One Orange contains 45 calories`
});

openButton3.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = `One Mango contains 60 calories`
});

// close button closes the dialog
closeButton.addEventListener("click", () => {
  dialogBox.close();
});