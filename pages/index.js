let popup = document.querySelector('.popup');
let screen = document.querySelector('.screen');
let closeButton = document.querySelector('.screen__close');
let viewers = document.getElementsByClassName('project__viewer');

for(var i = 0; i < viewers.length; i++) {
  viewers[i].addEventListener("click", openScreen);
}
closeButton.addEventListener('click', closeScreen);

function openScreen() {
  popup.classList.add('popup_active');
}

function closeScreen() {
  popup.classList.remove('popup_active');
}


// editButton.addEventListener('click', openForm);
// closeButton.addEventListener('click', closeForm);
// saveButton.addEventListener('click', saveForm);
// popup.addEventListener('keyup', (event)=>{if (event.keyCode === 13) {saveForm()}});

// function likeChange(event) {
//   if (event.target.classList.contains('element__like_checked')) {
//     event.target.classList.remove('element__like_checked');
//   } else {
//     event.target.classList.add('element__like_checked');
//   }
// }

// function saveForm() {
//   profileName.innerHTML = formName.value;
//   profileProfession.innerHTML = formProfession.value;
//   popup.classList.remove('popup_active');
// }

